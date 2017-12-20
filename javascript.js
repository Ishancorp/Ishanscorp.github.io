// var months=["January","February","March","April","May","June","July","August","September","October","November","December"];
// var d=new Date();
// var month_num=d.getMonth();
// var day=d.getDate();
// var year=d.getFullYear();
// var hour=d.getHours();
// var minute=d.getMinutes();
// var second=d.getSeconds();



document.getElementByID("head").innerHTML='<ul id="navig">
            <li id="navi"><a href="index.html" id="nav1" class="nav">Home</a></li>
            <li id="navi"><a href="math.html" id="nav2" class="nav">World War Sea</a></li>
            <li id="navi"><a href="about.html" id="nav3" class="nav">About</a></li>
        </ul>';
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
about.href="about.html"
