var months=["January","February","March","April","May","June","July","August","September","October","November","December"];
var d=new Date();
var month_num=d.getMonth();
var day=d.getDate();
var year=d.getFullYear();
var hour=d.getHours();
var minute=d.getMinutes();
var second=d.getSeconds();

var title=document.getElementById("uber_title");
title.innerHTML="Ishancorp";

var home=document.getElementById("nav1");
home.innerHTML="Home";
home.href="index.html"

var math=document.getElementById("nav2");
math.innerHTML="Math";
math.href="math.html"

var about=document.getElementById("nav3");
about.innerHTML="About";
about.href="about.html"
