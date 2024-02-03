// sync code 
// program 1
function additionA(){
    console.log("adddtionA")
}

function additionB(){
    console.log("additionB")
}
//additionB()
//additionA()

// program 2
// async code 
// function additionC(){
//     setTimeout(function(){
//         console.log("C is called")
//     },3000)
// }

// function additionD(){
//     console.log("D is called")
// }

// additionC()
// additionD()

// program 3 

// user create  -----   get id  ------ get info


// Original callback hell implementation
function getUserinfo(){
    setTimeout(function(){
        console.log("create user")
        setTimeout(function(){
            console.log("get id")
            setTimeout(function(){
                console.log("get info")
            },1000)
        },2000)
    },3000)
}
//getUserinfo()


// Improved version using promises

// Asynchronous function with Promise
function getUserinfoPromise() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log("user create");
            resolve();
        }, 3000);
    })
}

// Chaining promises for better readability
getUserinfoPromise()
    .then(function () {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                console.log("get id");
                resolve();
            }, 2000);
        });
    })
    .then(function () {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                console.log("get info");
                resolve();
            }, 1000);
        });
    })
    .catch(function (error) {
        console.error("Error:", error);
    });


// Promises ====> reject , resolve , pending

// Creating a promise
let pro = new Promise(function (resolve, reject) {

    let a = 10
    let b = 10

    if (a == b) {
        resolve("albert");
    }
    else {
        reject("robert");
    }

});

// Consuming the promise
pro.then(function (str) {
    console.log(str);
},
    function (str) {
        console.log(str); // bye
    });

