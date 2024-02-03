// 
function getUser(id) {
    return fetch(`https://reqres.in/api/users/${id}`)
        .then(function (response) {
            return response.json()
        })
        .then(function (response) {
            return response.data
        })
}

// Function that returns a Promise which rejects a
function getUserInfo() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            reject("Bye")
        }, 1)
    })
}

// Promise combinators

// Async function that uses Promise.all() 
async function GetUsersAll() {
    try {
        // Await Promise.all() to wait for sarv promises to resolve
        let a = await Promise.all([
            getUser(1),    //  Fetch data for user with ID 1
            getUser(2),    //  Fetch data for user with ID 2
            getUserInfo()   // Execute getUserInfo, which rejects after a delay
        ])
        //  Log the array of results
        console.log(a)
    } catch {
        //  Log an error if any promise in Promise.all() rejects
        console.log("Error occurred")
    }
}
//GetUsersAll()

// Async function that uses Promise.allSettled() to fetch data for multiple users and resolves even if some promises are rejected
async function getUserAllSettled(id, id2, id3) {
    //Await Promise.allSettled() to wait for all promises to settle (resolve or reject)
    let b = await Promise.allSettled([
        getUser(id),    // Fetch data for user with ID id
        getUser(id2),   // Fetch data for user with ID id2
        getUser(id3),   //  Fetch data for user with ID id3
        getUserInfo()   //  Execute getUserInfo, which rejects after a delay
    ])
    //  Log the array of settled promises
    console.log(b)
}
//getUserAllSettled(1,2,3)

// Async function that uses Promise.race() to fetch data for a user and info, whichever resolves or rejects first
async function getUserRace(id) {
    try {
        // ]Await Promise.race() to wait for the first promise to settle (resolve or reject)
        let a = await Promise.race([
            getUser(id),    //  Fetch data for user with ID id
            getUserInfo()   //  Execute getUserInfo, which rejects after a delay
        ])
        //Log the result of the first settled promise
        console.log(a)
    } catch {
        // Log an error if the promise in Promise.race() rejects
        console.log("Error occurred")
    }
}
//getUserRace(1)

// Async function that uses Promise.any() to fetch data for multiple users and resolves when any one of them fulfills
// It ignores rejections until all promises are rejected
async function getUserAny() {
    // Await Promise.any() to wait for the first promise to fulfill (resolve)
    let a = await Promise.any([
        getUserInfo(),  //  Execute getUserInfo, which rejects after a delay
        getUser(1),     //  Fetch data for user with ID 1
        getUser(2),     //  Fetch data for user with ID 2
    ])
    //Log the result of the first fulfilled promise
    console.log(a)
}
getUserAny()
