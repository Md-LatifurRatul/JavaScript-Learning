//Asynchronous delays in UI
//Asynchronous code execution allows to execute next instructions immediately and doesn't block the flow

//Callback: is a function passed as an argument to another function


// function sum(a, b) {
//     console.log(a + b);
// }

// function calc(a, b, sumCallBack) {
//     sumCallBack(a, b);

// }
// calc(1, 2, sum);

// const hello = () => {
//     console.log("Hello");
// }

// setTimeout(hello, 3000);
//Callback hell: Nested callbacks stacked below one another forming a pyramid structure.

// function getData(dataId, getNextData) {

//     setTimeout(() => {
//         console.log("data", dataId);
//         if (getNextData) {
//             getNextData();
//         }

//     }, 2000);


// }

//Callback hell (dificult to understand and manage)

// getData(1, () => {
//     console.log("Getting data 2...");
//     getData(2, () => {
//         console.log("Getting data 3....");
//         getData(3);
//     }, () => {
//         console.log("Getting data 4....");
//         getData(4);
//     });
// });

//Promises : is for eventual completion of task. It is an object in Js.
//It is a solution of callback hell
//Resolve and reject are callbacks provided by js
//function with two handlers (resolve, reject)
//(3 state) pending state, fullfill(resolved), reject

// let promise = new Promise((resolve, reject) => {
//     console.log("I am a promise");
//     reject("some err occured");

// });

// function getData(dataId, getNextData) {
//     return new Promise((resolve, reject) => {

//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("success");
//             // reject("eror");
//             if (getNextData) {
//                 getNextData();
//             }

//         }, 5000);
//     });
// }

//Js promise object can be: pending(result undefined), resolve(result is a value(fullfileed))
// reject(the result is an error object)

//Use of promises    .then() & .catch()

// const getPromise = () => {

//     return new Promise((resolve, reject) => {
//         console.log("I am a promise");
//         resolve("sucess");
//         // reject("network error");
//     });

// };

// let promise = getPromise();
// promise.then((res) => {
//     console.log("promise fulfilled", res);

// });

// promise.catch((err) => {
//     console.log("Rejected", err);

// });

//Promise chain:

// function asyncFunc1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data 1");
//             resolve("success");
//         }, 2000);
//     });

// }
// function asyncFunc2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data 2");
//             resolve("success");
//         }, 4000);
//     });

// }

// console.log("Fetching data 1...");

// asyncFunc1().then((res) => {
// console.log(res);
// console.log("Fetching data 2...");
// asyncFunc2().then((res) => {
// console.log(res);
//     });

// });


function getData(dataId) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            console.log("data", dataId);
            resolve("success");
            // reject("eror");


        }, 2000);
    });
}

// getData(1).then((result) => {
//     // console.log(result);
//     return getData(2);
// }).then((result) => {
//     return getData(3);
// }).then((result) => {
//     console.log(result);
// })

//Async-Await : async function always returns a promise
// await pauses the execution of its surronunding async function until the promise is settled.

// function api() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Weather api");
//             resolve(200);
//         }, 2000);

//     });
// }


// async function getWeatherData() {
//     await api();
//     await api();
// }

// async function getAlldata() {
//     console.log("Getting data 1...");
//     await getData(1);
//     console.log("Getting data 2...");
//     await getData(2);
// }

//IIFE: Immediately invoked functioon expression
//IIFE is a function that is called immediately as soon as it is defined

(async function () {
    console.log("Getting data 1...");
    await getData(1);
    console.log("Getting data 2...");
    await getData(2);
})();

