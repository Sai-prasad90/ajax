function routine(){
    setTimeout(function(){
        console.log("I wake up")
    },8000)
    setTimeout(function(){
        console.log("i take tea")
    },7500)
    setTimeout(function(){
        console.log("i do exercise")
    },7000)
}
routine()

function FullStack(){
    setTimeout(function(){
        console.log("roadmap to web development")
    })
    setTimeout(function(){
        console.log("React")
    },6500)
    setTimeout(function(){
        console.log("Node")
    },6000)
    setTimeout(function(){
        console.log("DOM")
    },5500)

}
FullStack()


// // //==================================


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
// getInfo()


// // //===============================

// // // let pro = new Promise(function(resolve,reject){
// // //     let a = 400 

// // //     if(a>=450){
// // //         resolve("You have cleared this exam")
// // //     }
// // //     else{
// // //         reject("try again")
// // //     }
// // // })
// // // pro
// // // .then(function(str){
// // //     console.log(str)
// // // },function(str){
// // //     console.log(str)
// // // })
// // // //=======
// // // pro
// // // .then(function(str){
// // //     console.log(str)
// // // })
// // // .catch(function(str){
// // //     console.log(str)
// // // })
// // // .finally(function(){
// // //     console.log("This is medical entrance exam")
// // // })

// // //=======
// // let score = new Promise(function(resolve,reject){
// //     let a = 405

// //     if(a>=450){
// //         resolve("You have cleared this exam")
// //     }
// //     else{
// //         reject("try again")
// //     }
// // })
// // score
// // // .then(function(str){
// // //     console.log(str)
// // //     return "You are waitlisted."                   //here it works
// // // })
// // .then(function(str){
// //     console.log(str)
// // })
// // .catch(function(str){
// //     console.log(str)
// //     return "You are waitlisted."                      //but not here
// // })
// // .catch(function(str){
// //     console.log(str)
// // })
// // .finally(function(){
// //     console.log("This is medical entrance exam")
// // })

// // //===============

// // function createUser(){
// //     return new Promise(function(resolve,reject){
// //         setTimeout(function(){
// //             resolve("user create")
// //         },3000)
// //     })
// // }
// // function getId(){
// //     return new Promise(function(resolve,reject){
// //         setTimeout(function(){
// //             resolve("get Id")
// //         },2000)
// //     })
// // }

// // function getInfo(){
// //     return new Promise(function(resolve,reject){
// //         setTimeout(function(){
// //             resolve("get info")
// //         },1000)
// //     })
// // }

// // createUser()
// // .then(function(str){
// //     console.log(str)
// //     return  getId()
// // })
// // .then(function(str){
// //     console.log(str)
// //     return getInfo()
// // })
// // .then(function(){
// //     console.log(str)
// // })
// // .catch(function(){
// //     console.log('rejected')
// // })
// // .finally(function(){
// //     console.log("i will always execute")
// // })


// //===================================================

// function wakeUp() {
//     return new Promise(function(resolve, reject) {
//         setTimeout(function() {
//             resolve("Woke up ekdum sakali");
//         }, 2000);
//     });
// }

// function workout() {
//     return new Promise(function(resolve, reject) {
//         setTimeout(function() {
//             resolve("Cycling and workout");
//         }, 1500);
//     });
// }

// function minskole() {
//     return new Promise(function(resolve, reject) {
//         setTimeout(function() {
//             resolve("Opens up laptop to attained class");
//         }, 1000);
//     });
// }

// wakeUp()
//     .then(function(str) {
//         console.log(str);
//         return workout();
//     })
//     .then(function(str1) {
//         console.log(str1);
//         return minskole();
//     })
//     .then(function(str) {
//         console.log(str);
//     })
//     .catch(function() {
//         console.log('Didnt do poooppppp');
//     })
//     .finally(function() {
//         console.log("Take a sip of tea and forgot all things");
//     });

    //==================================

    //await
    getUsers();
    function createUser() {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve("user create")
            }, 3000)
        })
    }
    function getId() {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve("get Id")
            }, 2000)
        })
    }
    
    function getInfo() {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve("get info")
            }, 1000)
        })
    }
    
        /// here awit is work like .then o perfome step wise excecution
    async function getUsers() 
         {
            let a = await createUser();
            console.log(a);
            let b = await getId();
            console.log(b);
            let c = await getInfo();
            console.log(c);
        }

    //==============

