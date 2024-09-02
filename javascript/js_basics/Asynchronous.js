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


// Fetch API - ye kisi url (API) par jaa kar kuchh data laayega ya data humaare paas se us url (API) par lekar jaayega.

// Axios (or other HTTP libraries) - ye bhi wahi karega jo fetch karta hai bas ye thoda jaada developer friendly hai.

// promise - isme jo bhi code likhoge wo apana kaam karega aur ye khud side stack mein chala jaayega us code ko lekar aur jab andar se code ko resolve kiya jaayega tab ye chalega.