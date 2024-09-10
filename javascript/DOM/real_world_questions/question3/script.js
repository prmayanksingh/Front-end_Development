// jab bhi forms ke saath deal karo yaad rakho ki submit hone par forms page ko reload kar dete hai, aur tumhe khayaal rakhna hai ke pages reload naa ho, nahito agar pagereload hua to js nahi chalegi, kyuki js chal paaye usse pahle hi page reload ho chuka hoga

// form ko submit karne par reload se rokne ke liye

var form = document.querySelector("form");
// var inp1 = document.querySelector("#inp1");
// var inp2 = document.querySelector("#inp2");
var inps = document.querySelectorAll('input[type="text"]')
var h4 = document.querySelector("h4");

form.addEventListener("submit", function(event){
    event.preventDefault();
    // if(inp1.value === '' || inp2.value ===  ''){
    //     h4.textContent = "error, some fields are blank";
    //     h4.style.color = "red";
    // }
    // else{
    //     h4.textContent = "";
    //     h4.style.color = "red";
    // }

    // inps.forEach(function(inp){
    //     if(inp.value === ''){
    //         h4.textContent = 'Error, some feilds are blank'
    //         h4.style.color = 'red'
    //     }
    //     else{
    //         h4.textContent = ''
    //         h4.style.color = 'black'
    //     }
    // })

    for(var i = 0; i<inps.length; i++){
        if(inps[i].value.trim() === ''){
            h4.textContent = 'Error, some feilds are blank';
            h4.style.color = 'red';
        }
    }
})






