var express = require('express');
var url = require('url');
var fs = require('fs');
var bodyParser = require('body-parser');
var customerRegister = express();

customerRegister.use(bodyParser.json());
function writeFile(customer){
  fs.writeFile('customer.json',"["+ customer +"]", function (err) {
  if (err) throw err;
  console.log('Saved!');
})
};
customerRegister.post('/write',function(req,res){
      console.log('body is ',req.body);
      fs.readFile('customer.json',function(err,data){
           var customerDetails = data.toString().split("\n");
           if(customerDetails.length === 1 && customerDetails[0] === ""){
             customerDetails =  JSON.stringify(req.body) ;
           }else{
            customerDetails[0] = customerDetails[0].replace("["," ");
            customerDetails[0] = customerDetails[0].replace("]"," ");
           customerDetails.push(JSON.stringify(req.body));
           }
           writeFile(customerDetails);
         });
});
customerRegister.listen(8080);
