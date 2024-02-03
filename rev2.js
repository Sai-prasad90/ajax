// program 1

// sync 

// function additionA(){
//     console.log("A")
// }

// function additionB(){
//     console.log("B")
// }

// Calling synchronous functions
// additionB()
// additionA()

// program 2

// function additionC(){
//     setTimeout(function(){
//         console.log("C")
//     },3000)
// }

// function additionD(){
//     console.log("D")
// }

// Asynchronous function with a timeout
// additionC()
// additionD()

// program 3 

// user create   ---- get  id  ---- get info

// Original callback hell implementation
function getInfo(){
    setTimeout(function(){
        console.log("user created")
    },3000)

    setTimeout(function(){
        console.log("get id")
    },2000)

    setTimeout(function(){
        console.log("get info")
    },1000)

}
//getInfo()

// Improved version using promises

// Creating a promise for program 3
let pro3 = new Promise(function(resolve, reject){
    let a = 10 
    let b = 10

    if(a == b){
        resolve("hello")
    }
    else {
        reject("bye")
    }

})

// Consuming the promise with then and catch
pro3
    .then(function(str){
        console.log(str)
    })
    .catch(function(str){
        console.log(str)
    })

// Creating a promise for program 4
let pro4 = new Promise(function(resolve, reject){
    let a = 22
    let b = 8

    if(a == b){
        resolve("hello")
    }
    else {
        reject("bye")
    }

})

// Consuming the promise with then, catch, and finally
pro4
    .then(function(str){
        console.log(str)
    })
    .catch(function(str){
        console.log(str)
    })
    .finally(function(){
        console.log("I will always run")
    })

// program 2

// Creating a promise for program 2
let pro = new Promise(function(resolve, reject){
    let a  = 10
    let b = -10

    if(a == b){
        resolve([11,22,33])
    }
    else {
        reject([-11,-22,-33])
    }

})

// Consuming the promise with then and catch
pro
    .then(function(arr){
        console.log(arr[0]) // 11
    })
    .catch(function(arr2){
        console.log(arr2[1]) // -22
    })

