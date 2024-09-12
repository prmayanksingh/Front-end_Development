var bar = document.querySelector("#progress-bar");

window.onscroll = function(){
    var windowTop = document.documentElement.scrollTop; // Kitna scroll kiya
    var windowHeignt = document.documentElement.scrollHeight - document.documentElement.clientHeight; // Puri height kitni hai
    var scrollPer = (windowTop / windowHeignt) * 100; // Percentage 
    bar.style.width = scrollPer + '%'; // Progress bar ki width badh rahi hai
}