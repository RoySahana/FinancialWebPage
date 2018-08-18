var app = angular.module('formApp', []);
app.controller('Mainctrl', function($scope, $http) {
    console.log("hi");
    this.submit = function() {
      console.log("Submitted first form", this.user);

      var newUrl = "http:localhost:8080/write";
    //  console.log("hi", this.user);
      $http.post(newUrl, this.user)
        .then(function(response) {
          console.log(response.data);
        }, function(errResponse) {
          alert("The functionality is under maintenance! Please try again later");
        });
    }
  });
