// var home = document.querySelector("#home");
// var about = document.querySelector("#about");
// var contact = document.querySelector("#contact");

// var hometext = document.querySelector("#hometext");
// var abouttext = document.querySelector("#abouttext");
// var contacttext = document.querySelector("#contacttext");

// home.addEventListener('click', function(){
//     removeeverything();
//     hometext.style.display = 'block';
//     hometext.style.width = '50%';
// })

// about.addEventListener('click', function(){
//     removeeverything();
//     abouttext.style.display = 'block';
//     abouttext.style.width = '50%';
// })

// contact.addEventListener('click', function(){
//     removeeverything();
//     contacttext.style.display = 'block';
//     contacttext.style.width = '50%';
// })

// function removeeverything(){
//     document.querySelectorAll("h3").forEach(function(h3){
//         h3.style.display = 'none';
//     })
// }

var divs = document.querySelectorAll(".tab");
var text = document.querySelectorAll("h3");

text[0].style.display = 'block';

divs.forEach(function(div, index){
    div.addEventListener("click", function(){
        hideAllText();
        text[index].style.display = 'block';
    })
})

function hideAllText(){
    text.forEach(function(text){
        text.style.display = 'none';
    })
}









