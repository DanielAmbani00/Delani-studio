$(document).ready(function(){
    $("#btn1").click(function(){
      $("#btn1").toggle();
      $("#btn1").toggle();
    })
    $("#btn1").click(function(){
      $("btn1").toggle();
      $("#btn1").toggle();
    })
    $("#btn2").click(function(){
      $("#btn2").toggle();
      $("#btn2").toggle();
    })
    $("#btn").click(function(){
      $("#btn2").toggle();
      $("#btn2").toggle();
    })
    $("#btn3").click(function(){
      $("#btn3").toggle();
      $("#btn3").toggle();
    })
    $("#btn3").click(function(){
      $("#btn3").toggle();
      $("#btn3").toggle();
    })
  })
  
  function response(){
    var userName = document.getElementById("name").value;
    alert(userName + " we have recieved your message. Thank you for reaching out to us.");
  }