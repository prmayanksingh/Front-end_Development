var input = document.querySelector("input");

var data = [
    { name: "harsh", src: "https://plus.unsplash.com/premium_photo-1673734625879-2dd5410bc3e1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    { name: "harshita", src: "https://images.unsplash.com/photo-1526510747491-58f928ec870f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    { name: "harshika", src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    { name: "shyam", src: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
]

var pers = "";
data.forEach(function(elem){
    pers += `<div class="person">
                <div class="img">
                    <img src="${elem.src}" alt="">
                </div>
                <h4>${elem.name}</h4>
            </div>`;
})


document.querySelector(".people").innerHTML = pers;

input.addEventListener("input", function(){
    var matching = data.filter(function(e){
        return e.name.startsWith(input.value)
    })
    
    var newuser = "";
    matching.forEach(function(elem){
        newuser += `<div class="person">
                    <div class="img">
                        <img src="${elem.src}" alt="">
                    </div>
                    <h4>${elem.name}</h4>
                </div>`;
    })
    
    
    document.querySelector(".people").innerHTML = newuser;
})








