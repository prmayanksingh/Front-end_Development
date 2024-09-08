var btn = document.querySelector("button");
var pr = document.querySelector("p");

btn.addEventListener('click', function(){
    pr.textContent = "changed";
})