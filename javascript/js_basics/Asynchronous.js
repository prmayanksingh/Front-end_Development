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











