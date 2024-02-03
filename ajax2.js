// // program 1

// // sync 


// function additionA(){
//     console.log("A")
// }


// function additionB(){
//     console.log("B")
// }

// additionB()
// additionA()

// // program 2

// function additionC(){
//     setTimeout(function(){
//         console.log("C")
//     },3000)
// }

// function additionD(){
//     console.log("D")
// }
// additionC()
// additionD()

// // program 3 

// // user create   ---- get  id  ---- get info

// function getInfo(){
//     setTimeout(function(){
//         console.log("user created")
//     },3000)

//     setTimeout(function(){
//         console.log("get id")
//     },2000)

//     setTimeout(function(){
//         console.log("get info")
//     },1000)

// }
// getInfo()
// function getInfo2(){
//     setTimeout(function(){
//         console.log("user created")
//         setTimeout(function(){
//             console.log("get id")
//             setTimeout(function(){
//                 console.log("get info")
//             },1000)
//         },2000)
//     },3000)
// }
// getInfo2()


// promises 

//   pending , resolve , reject 


let pro = new Promise(function(resolve,reject){
    let a = 10 
    let b =  10

    if(a == b){
        resolve("hello")
    }
    else {
        reject("bye")
    }

})
// consuming the promise 
pro.then(function(str){
    console.log(str)
},function(str){
    console.log(str)
})
// program 2
let pro5 = new Promise(function(resolve,reject){
    let a  = 10
    let b = -10                                

    if(a == b){
        resolve([11,22,33])
    }
    else {
        reject([-11,-22,-33])
    }
})

pro5.then(function(arr){                 //for resolve
    console.log(arr[0]) // 11
},function(arr2){                        //for reject
    console.log(arr2[1]) // -22
})  
// program 3 
let pro3 = new Promise(function(resolve,reject){
    let a = 10 
    let b = 10

    if(a == b){
        resolve("hello")
    }
    else {
        reject("bye")
    }

})

pro3
.then(function(str){
    console.log(str)
})
.catch(function(str){
    console.log(str)
})




let pro4 = new Promise(function(resolve,reject){
    let a = 10 
    let b = 5

    if(a == b){
        resolve("hello")
    }
    else {
        reject("bye")
    }

})
 ///consuming the promise 
pro4
.then(function(str){
    console.log(str)
})
.catch(function(str){
    console.log(str)
})
.finally(function(){
    console.log("i will always run")
})



























