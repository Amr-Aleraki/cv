$(document).ready(function(){

    $('#menu').click(function(){
      $(this).toggleClass('fa-times');
      $('header').toggleClass('toggle');
    });
  
    $(window).on('scroll load',function(){
  
      $('#menu').removeClass('fa-times');
      $('header').removeClass('toggle');
  
      if($(window).scrollTop() > 0){
        $('.top').show();
      }else{
        $('.top').hide();
      }
  
    });
  
  });


////////////////////////

var contnet1 =  document.getElementById("home")
var contnet2 =  document.getElementById("about")
var contnet3 =  document.getElementById("education")
var contnet4 =  document.getElementById("portfolio")
var contnet5 =  document.getElementById("contact")


