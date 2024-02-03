// let pro = new Promise(function(resolve,reject){
//     let a = 12
//     let b = 28
//     if ( a >= b ){
//         resolve("a is greater")
//     }
//     else {
//         reject("a is greater")
//     }
// })
// pro.then(function(str){
//     console.log(str)
// }
// ,function(str){
//     console.log(str)
// })

// //=============================
// pro.then(function(str){
//     console.log(str)
// })
// .catch(function(str){
//     console.log(str)
// })
// //============================
// pro
// .then(function(str){
//     console.log(str)
// })
// .catch(function(str){
//     console.log(str)
// })
// .finally(function(){
//     console.log("shhhhhhh")
// })



// //============================
// let proOne = new Promise(function(resolve,reject){
//     let a  = 10 
//     let b = 10

//     if(a == b){
//         resolve("hello")
//     }
//     else {
//         reject("bye")
//     }
// })

// // proOne
// .then(function(str){
//     console.log(str)
//     return "hello 2"
// })
// .then(function(str2){
//     console.log(str2) 
// })
// .catch(function(str){
//     console.log(str)
// })
// .finally(function(){
//     console.log("i will always execute")
// })

// call back hell 


//tightly coupled
function getInfo() {
    setTimeout(function () {
        console.log('user created')
        setTimeout(function () {
            console.log("get id")
            setTimeout(function () {
                console.log("get info")
            }, 1000)
        }, 2000)

    }, 3000)
}
//getInfo()

// ------------------------------------------------>
function createUser(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("user created")
        },3000)   
    })
}

function getId(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("get id")
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


createUser()
.then(function(str){
    console.log(str)
    return getId()
})
.then(function(str){
    console.log(str)
    return getInfo()
})
.then(function(str){
    console.log(str)
})
.catch(function(){
    console.log("bye")
})
.finally(function(){
    console.log("i will always execute")
})

//this is synch