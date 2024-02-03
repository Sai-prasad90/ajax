// Function declarations for program 1
// function additionA() {
//     console.log('A')
// }

// function additionB() {
//     console.log("B")
// }

// Synchronous function calls for program 1
// additionA()
// additionB()

// Function declarations for program 2
// function additionC() {
//     setTimeout(function () {
//         console.log("C")
//     }, 3000)
// }

// function additionD() {
//     console.log("D")
// }

// Asynchronous function calls for program 2
// additionC()
// additionD()

// Function declarations for program 3
// user create   get id   get info

// Callback hell implementation for program 3
// function getInfo() {
//     setTimeout(function () {
//         console.log("user create")
//         setTimeout(function () {
//             console.log("get id ")
//             setTimeout(function () {
//                 console.log("get info")
//             }, 1000)
//         }, 2000)
//     }, 3000)
// }

// Asynchronous function calls for program 3
// getInfo()

// Promises implementation for program 3
let pro = new Promise(function(resolve, reject){
    let a = 10 
    let b = 10 
    if(a == b){
        resolve("hello")
    }
    else{
        reject("bye")
    }
})

// Consuming the promise for program 3
// pro.then(function(str){
//     console.log(str)
// },function(str){
//     console.log(str)
// })

// Improved promise consumption with catch and finally
// pro.then(function(str){
//     console.log(str)
// })
// .catch(function(str){
//     console.log(str)
// })
// .finally(function(){
//     console.log("i will always execute")
// })

// Chaining promises for program 4
// pro.then(function(str){
//     console.log(str)
//     return "bye"
// })
// .then(function(str){
//     console.log(str)
// })
// .catch(function(str){
//     console.log(str)
// })
// .finally(function(){
//     console.log("i will always run")
// })

// Asynchronous function calls for program 4
// getInfo()

// Promises implementation for program 4
function createUser(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("user create")
        },3000)
    })
}

function getId(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("get Id")
        },2000)
    })
}

function getInfo(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("get info")
        },1000)
    })
}

// Consuming promises with chaining and catch for program 4
// createUser()
// .then(function(str){
//     console.log(str)
//     return  getId()
// })
// .then(function(str){
//     console.log(str)
//     return getInfo()
// })
// .then(function(){
//     console.log(str)
// })
// .catch(function(){
//     console.log('rejected')
// })
// .finally(function(){
//     console.log("i will always execute")
// })

// Async/Await implementation for program 4
async function  getUsers(){
    let p1 = await createUser()
    console.log(p1)
    let p2 = await getId()
    console.log(p2)
    let p3 = await getInfo()
    console.log(p3)
}
getUsers()
