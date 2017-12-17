$(document).ready(function(){
  $(".button-collapse").sideNav();
  $('.carousel').carousel();
  $('.parallax').parallax();
});

var user = "brianrobertrussell";
var host = "gmail.com";
var link = user + "@" + host ;

$("#mail-button").attr("href", "mail" + "to:" + link);
$("#mail-button").text(link);