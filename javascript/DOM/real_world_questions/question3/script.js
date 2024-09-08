// jab bhi forms ke saath deal karo yaad rakho ki submit hone par forms page ko reload kar dete hai, aur tumhe khayaal rakhna hai ke pages reload naa ho, nahito agar pagereload hua to js nahi chalegi, kyuki js chal paaye usse pahle hi page reload ho chuka hoga

// form ko submit karne par reload se rokne ke liye

var form = document.querySelector("form");
var inp1 = document.querySelector("inp1");
var inp2 = document.querySelector("imp2");

form.addEventListener("submit", function(event){
    event.preventDefault();
    console.log(inp1.value);
})







