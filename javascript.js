// var months=["January","February","March","April","May","June","July","August","September","October","November","December"];
// var d=new Date();
// var month_num=d.getMonth();
// var day=d.getDate();
// var year=d.getFullYear();
// var hour=d.getHours();
// var minute=d.getMinutes();
// var second=d.getSeconds();



var title=document.getElementById("uber_title");
title.innerHTML="Ishan Sharma";

var home=document.getElementById("nav1");
home.innerHTML="Home";
home.href="index.html"

var naval=document.getElementById("nav2");
naval.innerHTML="World War Sea";
naval.href="naval_warfare.html"

var about=document.getElementById("nav3");
about.innerHTML="About";
about.href="about.html";

var slideIndex = 1;
showDivs(slideIndex);

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}
