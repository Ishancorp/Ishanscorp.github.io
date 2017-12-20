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

document.getElementById("navig").innerHTML="
            <li id='navi'><a id='nav1' class='nav'></a></li>
            <li id='navi'><a id='nav2' class='nav'></a></li>
            <li id='navi'><a id='nav3' class='nav'></a></li>
       
";
