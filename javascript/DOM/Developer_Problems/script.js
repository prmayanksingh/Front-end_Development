// DEVELOPER PROBLEM
//--------------------
//Debuggig a TypeError: Cannot read property 'X' of undefied:

// var obj = {};
// // obj.name.age;
// obj?.name?.age;





// Handling Asynchronous Operations
// ek butto banao and us button ke click par aapko ek user lekar aana hai random tareeke se and usey add karna hai dom mein

// var getuser = document.querySelector("#getuser");

// function getNewUser(){
//     fetch(`https://randomuser.me/api/`)
//     .then(raw => raw.json())
//     .then(result => {
//     const {name, gender, email, picture} = result.results[0];
//     document.querySelector("#parent").innerHTML += `<div class="card w-60 p-4 rounded-xl bg-zinc-800">
//                 <div class="w-20 h-20 bg-zinc-500 rounded-2xl mb-3 overflow-hidden">
//                     <img class="w-full h-full fit-cover" src="${picture.large}" alt="image">
//                 </div>
//                 <h3 class="font-semibold text-2xl">${name.first}</h3>
//                 <h5 class="text-sm font-semibold opacity-60">${gender}</h5>
//                 <h6 class="text-sm opacity-40">${email}</h6>
//                 <p class="mt-5 text-xs font-semibold opacity-80">Lorem ipsum dolor sit amet consectetur adipisicing    elit. Dolores perferendis quod ab tenetur?</p>
//             </div>`;
//     })
// };

// getuser.addEventListener('click', function(){
//     getNewUser();
// })






// Working with Local Storage

// localStorage ek aisa space hai browser ke paas jismein tum data store kardo to data stored hi rehta hai, aap chaahe to browser band krdo, refresh krdo ya kuchh bhi karo aapka data stored rahega jab tak aap khud usey delete naa kar de.

// localstorage (ls) poore browser ka hota hai ya website ka?, ls hota to browser ka part hai par data store ye website ke naam se karta hai.

// ek button banao jisse aap user block kardo. ab jab bhi wo website khole use screen par blocked dikhey, nahi to website show ho and ek button jisse wo unblock ho.

// const block = document.querySelector("#block");
// const unblock = document.querySelector("#unblock");
// var text = document.querySelector("#status span")

// block.addEventListener('click', function(){
//     localStorage.setItem("block", true);
//     show();
// })

// unblock.addEventListener('click', function(){
//     localStorage.setItem("block", false);
//     show();
// })

// function show(){
//     if(localStorage.block === 'true'){
//         text.textContent = 'blocked';
//     }
//     else{
//         text.textContent = 'not blocked'
//     }
// }

// show();









// blocking scroll until something happens

document.querySelector('#hide')
.addEventListener('click', function(){
    document.body.classList.toggle("overflow-hidden")
})











