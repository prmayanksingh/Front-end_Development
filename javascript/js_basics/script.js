// console alert prompt

// // console.log
// console.log("Mayank Pratap Singh")

// // console.warn
// console.warn("Mayank Pratap Singh")

// // console.error
// console.error("Mayank Pratap Singh")

// alert
// alert("hello")

// prompt
// prompt("hello");


// variables and constants
// har programming lang mein data se deal karna hota hai, wo alag alag prakaar ka data ho sakta hai,
// toh un data ko save karne ke liye variables and constants banate hai aur un data ko baad me bhi access
// kar sakte hai unke naam se

// variables me value dene ke baad change ho sakti hai per constant pe nahi ho sakti
// var a = 12;
// a = 22;


// const b = 13;
// b = 22;// its an error


// compilers and interpreters 

// js language english words use krti hai and computers english nahi samjhte, woh samajhte hai 0 and 1 jisko
// current flow and current bypass bhi kah skte ho, and hum chaahte hai english mein likhke comp se baat se 
// baat karle, to hum ek translator lagaayege jo ki humara code english mein lega and use 0 and 1 mein convert 
// kr dega 

// compiler and interpreter translators hai jo ki english code ko convert ke rhe hai machine code mein


// js - interpreted 
// java - compiler
// c - compiler
// jit compiler - its uses the capability of interpreter (jo ki jaldi code ko convert karta hai) and the capability of 
// compiler (code ko jaldi chalata hai) and make sure the user gets the best performance






// window
// window is a collection of all the tools which are available in the browser and are given by the browser to use
// in js.
// there are many features which are frquently used in js and they are not the part of js, they are not the part
// of js the language but they are available in the browser, and when you use them in js they are called from the 
// browser not js.
// like - console , alert , prompt

// window ek bucket samajh lo jismein saari wo cheeje available hai jo browser deta hai js mein use krne ke liye
// kyoki wo saari cheejein js ka part nahi balki browser ka part hai which is available ot use in js, we can 
// also they're provided by browser to use in js, all these features which are made available via browser are
// put inside window





// types maatlb data ka roop
// mayank - string
// 12 - integer
// 12.3 - float
// 22.0 - boolean
// a - character'

// types = primitive dt || reference dt

// 12, 12.4, mayank, true, a, null, undefined - primitive dt
// [] () {} - reference dt

// it takes the reference
// var arr = [1,2,3];
// var b = arr;

// spread
// it copy the array
// var ar = [1,2,3];
// var c = [...ar];


// conditionals = if else else-if ternary operator switch case

// null undefined NaN 0 "" '' document.all false -> these values are considered as false
// rest of the values are true

// loops = repeat
// for while do-while foreach forin forof

// foreach ek normal loop nahi hai for and while ki tarah jo numbers pe ya start end par chalta hai,
// foreach loop sirf array pe chalta hai


// functios
// functions - js mein function normakl programming language jaise nahi hai, iska matlab hai , yah par js mein, 
//             functions banaane ke liye type nahi batana padta bas aapko function word likhna padega and aap usey koi 
//             naam deke bana skte ho

// indepth - js mein functions first class functions ka darja diya gaya hai, jiska matlab hai, ki js mein
//           functions ko value/variable ki tarah treat kiya ja sakta hai

// what is function?
// koi aisa code jo aapko baar baar use krna ho, ya fir koi aisa code jisko turant no chalana ho par kabhi
// chalana ho, usey function mein daal skte hai

// function abc(){
//     console.log("hello");
//     console.log("how are you");
// }
// abc();

// why we need
// to reuse code and to wrap the code which we want to run in future at some point of time




// prep for interview
// function abcd(){
//     // function statement
// }

// var abcd = function(){
//     // function expression
// }

// function(){
//     // anonymous function
// }

// // fat arrow wit
// var a = ()=>{};
// var b = ()=>{

// }
// var c = ()=>{

// }

// var g = ab => {}

// g(12)

// var a = () =>{
//     return 12;
// }
// var a = () => 12;
// var b = a();
// console.log(b);





// undefined is a value 
// ye value tab di jaati hai jab variable ko koi value naa mili ho, iska matlab hai, ye ek garbage value ki 
// tarah treat ki jaati hai, aap isey default value bhi kah sakte ho


// not define is an error
// koi particular element/identity ko use karna without it's declaration gives an error, and that error is 
// not defined error

// null is also a value
// this is a value  which resolve like, not found
// null is recieved when something is not found


// array
// var arr = [1, 2, "3", function(){}, [], 4];
// console.log(arr[1]);


// objects
// var obj = {};
// var obj2 = new Object();

// var battery = {
//     company: "canon",
//     price: 1200,
//     for: "camara",
//     isWorking: true
// };






// this

// this keyword js mein one of the most suspenseful keyword hai
// keyword ka matlab hota hai aisa word jiska koi matlab ho programming lang mein
// this ki value baar baar badal sakti hai alag laag conditions mein, saari conditions ko seekh jaao to this
// ko samajh jaaoge


// global - window
// console.log(this);


// function - window
// function abcd(){
//     console.log(this);
// }
// abcd();


// method - object
var obj = {
    name: function (){
        console.log(this);
    },
    age: 25,
    email: "hello@hello.com"
}
obj.name();


// // func inside method (es5) - window
// var obj2 = {
//     sayName: function (){
//         function childfnc(){
//             console.log(this);
//         }

//         childfnc();
//     },
//     age: 23
// }
// obj2.sayName();


// // func inside method (es6) - object
// var obj3 = {
//     sayName: function(){
//         const child = ()=>{
//             console.log(this);
//         }

//         child();
//     }
// }
// obj3.sayName();


// // constructor fun mein this ki value - new blank object
// function add(){
//     console.log(this);
// }

// const ans = new add();



// // event listener mein this ki value - that element jispar event listner laga ho

// document.querySelector("button")
// .addEventListener("click", function(){
//     console.log(this);
// })






// call apply bind
// ye teen tareeke hai function ko call karne ke kisi object ko this maan kar

// call
// const obj = {name: "harsh"}

// function abcd(){
//     console.log(this);
// }

// abcd.call(obj)

// call
// const obj1 = {name: "harsh"}

// function abcd(a,b,c){
//     console.log(this);
// }

// abcd.call(obj1,1,2,3)

// apply
// const obj2 = {name: "harsh"}

// function abcd(a,b,c){
//     console.log(this);
// }

// abcd.call(obj2,[1,2,3])

// bind
// const obj3 = {name: "harsh"}

// function abcd(){
//     console.log(this);
// }

// const baadmechalanekeliyefunc = abcd.bind(obj3)

// baadmechalanekeliyefunc();





// Prototypal Inheritance

// hum objects create karte hai and kisi ek parent constructor function ke prototype mein kuch add 
// kar dete hai and jab bhi add hota hai to wo parent dse banne waale sabhi chilldren instances ko 
// wo properties jo parent ko prototype mein di gayi thi wo milti hai  

// ek function jo ki this ka use kar raha ho and new ke through naye naye objects bana kar deta ho 
// aise function ko constructor function kahte hai

// function makeHuman(name, age){
//     this.name = name;
//     this.age = age;
// }

// makeHuman.prototype.printMyName = function(){
//     console.log(this.name);
// }

// let human1 = new makeHuman("mayank", 20);
// let human2 = new makeHuman("harsh", 25);





// closures

// aisa koi bhi function jo ek aur function ko return karde usey closure kahte hai.
// ek function jo return kare doosra function, aur use kare parent function ka koi variable

// function abcd(){
//     var a = 12;
//     return function(){
//         console.log(a);
//     }
// }

// var ans = abcd();
// ans();





// event delegation

// event delegation = jab aap event listener se kai saare different elements ke events ko handle kar sake.
// event listener ko parent par lagao and unko id, class ya fir tag ke basis par differentiate karke
// different task karao

// var parent = document.querySelector("#parent")

// parent.addEventListener("click", function(event){
//     if(event.target.id === "play"){
//         console.log("play song");
//     }
//     else if(event.target.id === "pause"){
//         console.log("pause song");
//     }
// })






// higher order functions

// aisa koi function jo ki ek function ko parameter mein accept karle and/or ek function ko return karde

// function abcd(param){

// }

// abcd(function(){});

// function abcd(){
//     return function(){

//     }
// }

// var arr = [1,2,3,4,5,6];

// arr.forEach(function(){

// })





// error handling - try catch

// function divide(a,b){
//     try{
//         if(b == 0){
//             throw Error("something is wrong");
//         }
//         console.log(a/b);
//     }
//     catch(err){
//         console.error(err);
//     }
// }

// divide(12,0);




// events - click, dblclick, mouseover, input

// coustom events

// how

// make event
// const evt = new Event("chacha");

// //attach event to some dom element
// document.querySelector("button")
// .addEventListener("chacha", function(){
//     alert("chacha event hua");
// })

// // dispatch that event from that dom element in which you attached the event
// document.querySelector("button").dispatchEvent(evt)




