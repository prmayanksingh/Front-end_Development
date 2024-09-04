// ASYNC JS


// aisa koi bhi code jismein kuchh time lagta hai, js mein use by default in most cases async code maan kar side stack mein daal deya jaata hai


//ye sabhi use hi tab kiye jaate hai jab aapko kuch aisa karna ho jismein time lagega

// settimeout - settimeout ka code kuchh der  baad chalta hai.
// console.log("hey 1"); // synchronous
// console.log("hey 2"); // synchronous
// setTimeout(function{
//     console.log("hey 3"); // asynchronous
// },2000)
// console.log("hey 4"); // synchronous




// setinterval - set interval ka code kuchh der baad chalta hai baar baar ek particular interval time mein.
// setInterval(function(){
//     console.log("hey");
// },2000)

// var count = 1;
// const interval = setInterval(function(){
//     count++;
//     console.log(count);
//     if (count === 3) clearInterval(interval);
// },1000)




// Fetch API - ye kisi url (API) par jaa kar kuchh data laayega ya data humaare paas se us url (API) par lekar jaayega.
// kyuki ye internet par jaayega aur fir data ko leka aayega to ismein time lagta hai to by default hi js mein fetch ko async banaaya gaya hai kyuki fetch ka kaam hai data laana wo bhi kisi url se , ab aisa ho skta hai us url ki website slow ho, to data laane mein time laga aur agar fetch synchronous hota to uske baad ka code tab tak nahi chalta jab tak uska data nahi aajata, which is a big problem, poora code atak sakta tha

// fetch(`https://randomuser.me/api/`)
// .then(raw => raw.json())
// .then(readable => console.log(readable.results[0]))




// Axios (or other HTTP libraries) - ye bhi wahi karega jo fetch karta hai bas ye thoda jaada developer friendly hai.
// axios.get(`https://randomuser.me/api/`)
// .then(result => console.log(result.data.results[0])





// Promise - isme jo bhi code likhoge wo apana kaam karega aur ye khud side stack mein chala jaayega us code ko lekar aur jab andar se code ko resolve kiya jaayega tab ye chalega.

// kuchh code socho man mein, jo ki async code ho, matlab ki ye side stack mein jaayega aur baad mei chalega main stack ke, ab ye socho ki aapne is code ko likha hai to iska answer kabhi aayega aur aisa bhi ho sakta hai ki answer naa aaye, promises kya hai aisa samjho ki aap promise ke andar koi bhi async code likhdo jo man mein aaye aur promise aapko ek parchi dedeta hai and wo parchi par by default likha hota hai waiting, parchi par do events hote hai mainly ekd event ka naam hai then aur ek event ka naam hai catch, agar aapka data aagaya to parchi pe resolved likhjaayega waiting ki jagah and then chalega aur ager data mein dikkat aayi to catch chalega nad waiting ki jagah rejected likhjaayega. 

// aman - me as a developer  raghav - promise
// aman raghav ke paas gaya aur bola ki khaana lene bhejdo kisiko raaghav ne kisi ko bhej diya and aman ko bola ye parchi lelo jab bhi wo banda aajayega to parchi par pata chal jaayega

// const parchi = new Promise(function(resolve, reject){
//     fetch(`https://randomuser.me/api/`)
//     .then(raw => raw.json())
//     .then(result => {
//         if(result.results[0].gender === "male") resolve();
//         else reject();
//     })
// });

// parchi
// .then(function(){
//     console.log("green button daba");
// })
// .catch(function(){
//     console.log("red button daba");
// })







// Callbacks
// callback kuch bhi ek function hai jise pass kiya gaya ho kisi aur function mein aur jab wo function chale to aap us pass kiye gaye callback function ko chal paayege

// function abcd(a, b){
//     b();
// }
// abcd(1, function(){console.log("callback chala")})

// user ka data mangaao and jab data aajaye to us data ke name, gender and email ko print karo

// function getData(url, callback){
//     fetch(url)
//     .then(raw => raw.json())
//     .then(result => {
//         callback(result)
//     })
// }

// getData (`https://randomuser.me/api/`, function(result){
//     console.log(result.results[0].gender, result.results[0].email, result.results[0].name.first);
// })








// Async/Await - koi bhi function banaalo and uske andar jo man mein aaye wo async code likhdo, ab jab aap async likhte ho to baad waali line pahle chal jaati hai kyuki asyn side stack pe hota hai aur baad walli line agar async ke basis par hui to aapka code fail ho jaayega, wo isliye kyuki aapka code depend karta hai async code par jo ki baad mein chalega sync code chalne ke baad.

// with async await aap async code bhi aise likh skte ho jaise ki aap normal synchronous code likh rahe ho

// async function abcd(){
//     let a = await fetch(`https://randomuser.me/api/`);
//     a = await a.json();
//     console.log(a);
// }

// abcd();









// Event Loop
// (main stack) (event loop) (callback queue(side stack))








// Callbacks vs Promises vs Async/Await
// ek url se data lekar aao and usey console par show karo

// Callbacks
// function dataFetcher(url, callback){
//     fetch(url) 
//     .then(raw => raw.json())
//     .then(result => {
//         callback(result);
//     })
// }

// dataFetcher(`https://randomuser.me/api/`, function(result){
//     console.log(result.results[0].name.first);
// })


// Promises
// function dataFetcher(url){
//     const parchi = new Promise(function(resolve, reject){
//         fetch(url)
//         .then(raw => raw.json())
//         .then(result => {
//             resolve(result);
//         })
//     })
//     return parchi;
// }

// dataFetcher(`https://randomuser.me/api/`)
// .then(function(result){
//     console.log(result);
// })


// Async/Await
// async function dataFetcher(url){
//     let data = await fetch(url);
//     let result = await data.json();
//     return result;
// }

// async function hh(){
//     let data = await dataFetcher(`https://randomuser.me/api/`);
//     console.log(data);
// }

// hh();










// Generators
// aap execution ko pause kr skte ho and bol sakte ho ki ab agla step karo aur fir aap agla step jab bhi chahiye wo step kar skte ho

// function* printNums(){ 
//     console.log("started");
//     yield 1;
//     console.log("pehla chal chuka");
//     yield 2;
//     console.log("dusra chal chuka");
//     yield 3;
// }
// const ans = printNums();
// console.log(ans.next());
// console.log(ans.next());
// console.log(ans.next());

// 1-10
// function* allNums(){
//     for(let i = 1; i < 11; i++){
//         yield i;
//     }
// }

// const gen = allNums();
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);

// prime numbers from 1-20 using generator
// function* printPrime(){
//     for(let i = 2; i <= 20; i++){
//         let j = 2
//         for(; j <= i/2; j++){
//             if(i % j === 0) break;
//         }
//         if(j > i/2) yield i;
//     }
// }

// const ans = printPrime();
// console.log(ans.next().value);
// console.log(ans.next().value);
// console.log(ans.next().value);
// console.log(ans.next().value);












// Web workers

// thread - aisa samjho ki ek computational task ko perform krne ke liye ek thread aloted hota hai

// usually humaara poora code single thread par chalta hai par kai baar kuchh bade calculation perform karne pad jaate hai jiski wajah se aapka main thread busy ho jata hai yaa fir wo kaafi jaada loaded hojaata hai aur aapke baaki tasks ki performance kam ho jaati hai.
// is situation ko achhe se handle karne ke liye we use web workers, aap chaaho to apna koi tak we worker ko bhej sakte ho jo ki doosre thread mein usko perform karega and aap ka main thread efficiently baaki cheejo ko handle kar paayega

// aap apni main js file se data send kr skte ho and aap worker file data accept karoge and jo perform karna hai karoge and waha se data waapas main file bhejoge and main file mein waapaas accept karoge

// var nums = Array.from({length: 10000}, (_,b)=>b+1);
// const worker = new Worker ("worker.js");

// worker.postMessage(nums);

// worker.onmessage = function(data){
//     console.log(data.data);
// }
