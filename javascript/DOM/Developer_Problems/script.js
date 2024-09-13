// DEVELOPER PROBLEM
//--------------------
//Debuggig a TypeError: Cannot read property 'X' of undefied:

// var obj = {};
// // obj.name.age;
// obj?.name?.age;

// Handling Asynchronous Operations
// ek butto banao and us button ke click par aapko ek user lekar aana hai random tareeke se and usey add karna hai dom mein

var getuser = document.querySelector("#getuser");

function getNewUser(){
    fetch(`https://randomuser.me/api/`)
    .then(raw => raw.json())
    .then(result => {
    const {name, gender, email, picture} = result.results[0];
    document.querySelector("#parent").innerHTML += `<div class="card w-60 p-4 rounded-xl bg-zinc-800">
                <div class="w-20 h-20 bg-zinc-500 rounded-2xl mb-3 overflow-hidden">
                    <img class="w-full h-full fit-cover" src="${picture.large}" alt="image">
                </div>
                <h3 class="font-semibold text-2xl">${name.first}</h3>
                <h5 class="text-sm font-semibold opacity-60">${gender}</h5>
                <h6 class="text-sm opacity-40">${email}</h6>
                <p class="mt-5 text-xs font-semibold opacity-80">Lorem ipsum dolor sit amet consectetur adipisicing    elit. Dolores perferendis quod ab tenetur?</p>
            </div>`;
    })
};

getuser.addEventListener('click', function(){
    getNewUser();
})















