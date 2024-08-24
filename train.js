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

function checkContent(str1, str2) {
    
    if(str1.sort === str2.sort && str1.length === str2.length) {
        return true;
    } else {
        return false;
    }
};

const result = checkContent ("mitgroup", "gmtiprou");
console.log("result:", result);
 