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

// promise - isme jo bhi code likhoge wo apana kaam karega aur ye khud side stack mein chala jaayega us code ko lekar aur jab andar se code ko resolve kiya jaayega tab ye chalega.