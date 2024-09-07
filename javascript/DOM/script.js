// selection
// document.getElementById
// document.getElementsByClassName
// document.getElementsByTagName

// save and select
// var abcd = document.querySelector();

// id
// var abcd = document.querySelector('#abcd')

// class
// var classabcd = document.querySelector('.abcd')

// tag
// var h3 = document.querySelector("h3")

// var firimg = document.querySelector("#abcd")
// var secimg = document.querySelector(".abcd")

// var firh3 = document.querySelector(".defg")
// var sech3 = document.querySelector("#defg")

// agar aapke paas baht saare h3 hai and aap select karte ho to srf pahla h3 select hoga
// ager sare h3 select karna hai toh likhna padega
// var h3 = document.querySelectorAll("h3")







// Modifying Elements

// kisi ko bhi change karne se pahle, pahla step hota hai usko select karna

// textContent and innerHTML
// var btn = document.querySelector("button");
// btn.textContent = "Starting in 3 Seconds"

// var h1 = document.querySelector("h1")

// // h1.textContent = "i am gonna change this thing"
// h1.textContent += "Mayank"

// var h1 = document.querySelector("h1")
// h1.innerHTML = '<i>hello</i>'







// change in css

// var h1 = document.querySelector('h1');
// h1.classList.add('makeitred');







// Creating and Deleting Element

// var h1 = document.createElement('h1');
// h1.textContent = "hey";
// h1.classList.add("makeitred");

// document.querySelector("body").appendChild(h1);

// var img = document.createElement('img');
// img.src = 'https://images.unsplash.com/photo-1709321954258-698bea8a21e6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

// document.querySelector("body").appendChild(img);
// // removing
// document.querySelector("body").removeChild(img);







// Event Handling

// jab bhi aap kisi element par kisi bhi prakaar ka koi action krte ho to waha par event by default automatically raise hota hai ab agar aapne koi event listener nahi banaya hai to wo event ignore krdiya jaata hai par agar aapne listener banaya hai us event par to wo event ignore nahi kiya jaayega balki uska listener chalega.


// var btn = document.querySelector("button");
// btn.addEventListener('mouseover', function(){
//     btn.textContent = "starting....";
//     btn.style.backgroundColor = 'red';
// })
// btn.addEventListener('mouseleave', function(){
//     btn.textContent = "make new card";
//     btn.style.backgroundColor = 'white';
// })
// click, dblclick, mouseover, mouseleave


// Event Object
// document.querySelector("body")
// .addEventListener("mousemove", function(dets){
//     console.log(dets);
// })







