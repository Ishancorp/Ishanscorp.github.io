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

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
    }
    x[slideIndex-1].style.display = "block"; 
}
Try It Yourself »
