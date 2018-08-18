$(document).ready(function(){

  jQuery(window).resize(function () {
  if (jQuery(window).width()  > '768') {
    $("#div1").css("height:300px");
  }
  else{
    $("#div1").css("height:500px");
  }
});
