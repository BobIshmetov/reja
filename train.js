// console.log("Jach Ma maslahatlari");
// const list = [
//     "yaxshi tralaba boling", // 0-20
//     "togri boshliq tanlang va koproq hato qiling", //20-30
//     "uzingizga ishlashingizni boshlang", //30-40
//     "siz kuchli bolgan narsalarni qiling", //40-50
//     "yoshlarga invistitsiya qiling", //50-60
//     "endi dam oling, foydasi yoq endi", //60
// ];

// callback function
// function maslahatBering(a, callback){
//     if (typeof a !== "number") callback("insert a number", null);
//     else if (a <= 20) callback(null, list[0]);
//     else if (a > 20 && a <= 30) callback(null, list[1]);
//     else if (a > 30 && a <= 40) callback(null, list[2]);
//     else if (a > 40 && a <= 50) callback(null, list[3]);
//     else if (a > 50 && a <= 60) callback(null, list[4]);
//     else {
//        setTimeout(function() {
//         callback(null, list[5])
//        }, 5000);
//     }
// }

// console.log('passed here 0');

//  maslahatBering(65, (err, data) => {
//     if(err) console.log('ERROR:', err);
//     else {
//         console.log("javob:", data);   
//     }
//  });

// console.log('passed here 1');

//ASYN function
// async function maslahatBering(a){
//     if (typeof a !== "number") throw new Error("insert a number");
//     else if (a <= 20) return(null, list[0]);
//     else if (a > 20 && a <= 30) return list[1];
//     else if (a > 30 && a <= 40) return list[2];
//     else if (a > 40 && a <= 50) return list[3];
//     else if (a > 50 && a <= 60) return list[4];
//     else {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve(list[5]);
//             }, 5000);
//         });
    //    setTimeout(function() {
    //     callback(null, list[5])
    //    }, 5000);
//     }
// }


//call via then/catch
// console.log('passed here 0');
// maslahatBering(25)
//  .then((data) => {
//     console.log("javob:", data);    
//  })
//  .catch((err) => {
//     console.log("ERROR", err);    
//  });
// console.log('passed here 1');


// call via async/await
// async function run() {
//     let javob = await maslahatBering(25);
//     console.log(javob);
//     javob = await maslahatBering(70);
//     console.log(javob);
//     javob = await maslahatBering(41);
//     console.log(javob);    
// }
// run();

// Misol:

//-----------------------------------------------------------------------------------------
/*Masalani izohi
A-TASK: 

Shunday 2 parametrli function tuzing, hamda birinchi parametrdagi letterni ikkinchi parametrdagi sozdan qatnashgan sonini return qilishi kerak boladi.
MASALAN countLetter("e", "engineer") 3ni return qiladi.*/

// //Javoob:

// function countLetter(e, engineer) {
//     let a = 0;
//     for (let i = 0; i < engineer.length; i++) {
//         if (engineer[i] === e) {
//             a++;
//         }
//     }
//     return a;
// }


// const ATASC = countLetter("e", "engineer");
// console.log("A-TASK:", ATASC);
//----------------------------------------------------------------------------------------


/*Masalani izohi
B-TASK: 

Shunday function tuzing, u 1ta string parametrga ega bolsin, hamda osha stringda qatnashgan raqamlarni sonini bizga return qilsin.
MASALAN countDigits("ad2a54y79wet0sfgb9") 7ni return qiladi.

*/

//Javoob:

// function countDigits(str){
//     let a = 0;
//     for(let i = 0; i < str.length; i++ ) {
//         if (!isNaN(str[i]) && str[i] !== ' ') {
//             a++;
//         }
//     }
//     return a;
// };

// const raqamlarSoni = countDigits("ad2a54y79wet0sfgb9");
// console.log("Umumiy:", raqamlarSoni);


//----------------------------------------------------------------------------------------


/*Masalani izohi
C-TASK: 

Shunday function tuzing, u 2ta string parametr ega bolsin, hamda agar har ikkala string bir hil harflardan iborat bolsa true aks holda false qaytarsin
MASALAN checkContent("mitgroup", "gmtiprou") return qiladi true

*/

//Javoob:

// function checkContent(str1, str2) {
    
//     if(str1.sort === str2.sort && str1.length === str2.length) {
//         return true;
//     } else {
//         return false;
//     }
// };

// const result = checkContent ("mitgroup", "gmtiprou");
// console.log("result:", result);
 
/*Masalani izohi

D-TASK: 

Shunday class tuzing nomi Shop, va uni constructoriga 3 hil mahsulot pass bolsin, hamda classning 3ta methodi bolsin,
 biri qoldiq, biri sotish va biri qabul. Har bir method ishga tushgan vaqt ham log qilinsin.
MASALAN: const shop = new Shop(4, 5, 2); shop.qoldiq() return hozir 20:40da 4ta non, 5ta lagmon va 2ta cola mavjud!
shop.sotish('non', 3) & shop.qabul('cola', 4) & shop.qoldiq() return hozir 20:50da 1ta non, 5ta lagmon va 6ta cola mavjud!
*/

const moment = require('moment');

class Shop {
    //State

    //Constructor
    constructor(pruduct1, pruduct2, pruduct3){
        this.pruduct1 = pruduct1;
        this.pruduct2 = pruduct2;
        this.pruduct3 = pruduct3;
    };

    //Method
    qabul(pruduct, amount ){
        if (typeof pruduct === "string" && typeof amount === "number" ) {
            if (pruduct === "non"){
                this.pruduct1 += amount;
            }else if (pruduct === "lagmon"){
                this.pruduct2 += amount;
            }else if (pruduct === "cola"){
                this.pruduct3 += amount;
            }else{
                console.log("Bunday mahsulot yo`q");
            }
        }else{
            console.log("Ma`lumotni to`g`ri kiriting");            
        }
    };
    sotish(pruduct, amount){
        if (typeof pruduct === "string" && typeof amount === "number" ) {
            if (pruduct === "non"){
                this.pruduct1 >= amount ?  this.pruduct1 -= amount : console.log("omborda non yetarli emas");                
            }else if (pruduct === "lagmon"){
                this.pruduct2 >= amount ?  this.pruduct2 -= amount : console.log("omborda lagmon yetarli emas");
            }else if (pruduct === "cola"){
                this.pruduct3 >= amount ?  this.pruduct3 -= amount : console.log("omborda cola yetarli emas");                  
            }else{
                console.log("Bunday mahsulot yo`q");
            }
        }else{
            console.log("Ma`lumotni to`g`ri kiriting");            
        }
    };

    qoldiq(){
        console.log(`Hozir ${moment().format('HH:mm')} da ${this.pruduct1}ta non, ${this.pruduct2}ta lagmon, ${this.pruduct3}ta cola mavjud`);        
    };
};



