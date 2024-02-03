// Function to fetch user data based on the specified page number
function getUserId(pageNumber){
    return fetch(`https://reqres.in/api/users?page=${pageNumber}`)
    .then(function(response){
        return response.json()
    }).then(function(response){
        console.log(response.data)
        return response.data
    })
}
// Function to fetch details of a single user based on the provided user ID
function getSingleUser(id){
    return fetch(`https://reqres.in/api/users/${id}`)
    .then(function(response){
        return response.json()
    })
    .then(function(response){
        console.log(response.data)
        return response.data
    })
}
// Function to render using user details
function renderHtml(el){
    document.write(`<h1>${el.id}<h1>`)
    document.write(`<h2>${el.first_name}${el.last_name}<h2>`)
    document.write(`<h2>${el.email}<h2>`)
    document.write(`<img src=${el.avatar}>`)
}
// Async function to get user information and render HTML
async function getUserInfo(pageNumber){
    // Fetch user data for the specified page number
    let arr = await getUserId(pageNumber)
    // Fetch details of a single user using the user ID from the first request
    let user = await getSingleUser(arr[1].id)
    // Render HTML using the details of the single user
    renderHtml(user)
}

// Call the async function to demonstrate the entire process
getUserInfo(1)
