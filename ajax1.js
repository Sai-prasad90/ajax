
// sync code 
function additionA(){
    console.log("adddtionA")
}

function additionB(){
    console.log("additionB")
}

additionB()
additionA()

// async code 
function additionC(){
    setTimeout(function(){
        console.log("C is called")
    },3000)
}

function additionD(){
    console.log("D is called")
}

additionC()
additionD()

//=============

// user create  -----   get id  ------ get info


function getUserinfo(){
    setTimeout(function(){
        console.log("create user")
    },3000)   //it will take time but return fast first so this will take 3 sec

    setTimeout(function(){
        console.log("get id")
    },2000)

    setTimeout(function(){
        console.log("get info")
    },1000)

}
//getUserinfo()
// asyn function --------- sync
// call back hell  ---------> promises
// tightly coupled and not usable


function getUserinfo(){
    setTimeout(function(){
        console.log("user create")
        setTimeout(function(){
            console.log("get id")
            setTimeout(function(){
                console.log("get info")
            },1000)
        },2000)
    },3000)

}
getUserinfo()


// Promises ====> reject , resolve , pending
// promises


let pro =  new Promise(function(resolve,reject){

    let a = 10 
    let b = 10

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
},
function(str){
    console.log(str) // bye
})



//==============================