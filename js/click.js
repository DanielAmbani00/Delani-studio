$(document).ready(function(){
    $("#img1").click(function(){
      $("#img1").toggle();
      $("#btn1").toggle();
    })
    $("#btn1").click(function(){
      $("btn1").toggle();
      $("#img1").toggle();
    })
    $("#img2").click(function(){
      $("#img2").toggle();
      $("#btn2").toggle();
    })
    $("#btn2").click(function(){
      $("#btn2").toggle();
      $("#img2").toggle();
    })
    $("#img3").click(function(){
      $("#img3").toggle();
      $("#btn3").toggle();
    })
    $("#btn3").click(function(){
      $("#btn3").toggle();
      $("#img3").toggle();
    })
    
  })
  
  function response(){
    var userName = document.getElementById("name").value;
    alert(userName + " we have recieved your message. Thank you for reaching out to us.");
  }
  