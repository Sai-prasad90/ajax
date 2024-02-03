// cominators
//promise .all() - only if all promises resolved then output array other short
//promise.allsettled() - resove / reject gives output
//race.race () - one will outdisplay 
//promise.any() -shorts a first resolve state


function getUserInfo(id) {
    // Using the Fetch API to make an HTTP request to the specified URL
    return fetch(`https://reqres.in/api/users/${id}`)
        // Handling the response using promises
        .then(function (response) {
            console.log(response); // Logging the raw response object
            return response.json(); // Parsing the response as JSON
        })
        .then(function (response) {
            return response.data; // Extracting the 'data' property from the response
        });
}

// Function that returns a promise which rejects after a delay of 1 second
function getUserInfo2() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            reject("I am rejected");
        }, 1000);
    });
}

// Using Promise.all to execute multiple promises concurrently and wait for all of them to resolve or any one to reject
Promise.all([
    getUserInfo(1),
    getUserInfo(2),
    getUserInfo(3),
    getUserInfo2()
])
    .then(function(response){
        console.log(response); // Logging the resolved values of all promises
    })
    .catch(function(err){
        console.log(err); // Logging the first rejection reason encountered
    });

// Using Promise.allSettled to wait for all promises to settle (resolve or reject) without terminating on the first rejection
Promise.allSettled([
    getUserInfo(1),
    getUserInfo(2),
    getUserInfo2(),
    getUserInfo(3),
])
    .then(function(response){
        console.log(response); // Logging an array of objects representing the outcome of each promise
    });

// Using Promise.race to wait for the first promise to settle (either resolve or reject)
Promise.race([
    getUserInfo(1),
    getUserInfo2()
])
    .then(function(response){
        console.log(response); // Logging the value of the first settled promise
    })
    .catch(function(response){
        console.log("I am rejected"); // Logging a message if the first settled promise is rejected
    });

// Using Promise.any to wait for the first promise to fulfill (resolve), ignoring rejections until all promises have rejected
Promise.any([
    getUserInfo2(),
    getUserInfo(1),
    getUserInfo(2),
])
    .then(function(response){
        console.log(response); // Logging the value of the first fulfilled promise
    });
