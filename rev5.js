// Given data representing a paginated list of users
let users = {
    "page": 2,
    "per_page": 6,
    "total": 12,
    "total_pages": 2,
    "data": [
        // User details
        {
            "id": 7,
            "email": "michael.lawson@reqres.in",
            "first_name": "Michael",
            "last_name": "Lawson",
            "avatar": "https://reqres.in/img/faces/7-image.jpg"
        },
        {
            "id": 8,
            "email": "lindsay.ferguson@reqres.in",
            "first_name": "Lindsay",
            "last_name": "Ferguson",
            "avatar": "https://reqres.in/img/faces/8-image.jpg"
        },
        {
            "id": 9,
            "email": "tobias.funke@reqres.in",
            "first_name": "Tobias",
            "last_name": "Funke",
            "avatar": "https://reqres.in/img/faces/9-image.jpg"
        },
        {
            "id": 10,
            "email": "byron.fields@reqres.in",
            "first_name": "Byron",
            "last_name": "Fields",
            "avatar": "https://reqres.in/img/faces/10-image.jpg"
        },
        {
            "id": 11,
            "email": "george.edwards@reqres.in",
            "first_name": "George",
            "last_name": "Edwards",
            "avatar": "https://reqres.in/img/faces/11-image.jpg"
        },
        {
            "id": 12,
            "email": "rachel.howell@reqres.in",
            "first_name": "Rachel",
            "last_name": "Howell",
            "avatar": "https://reqres.in/img/faces/12-image.jpg"
        }
    ],
    // Support information
    "support": {
        "url": "https://reqres.in/#support-heading",
        "text": "To keep ReqRes free, contributions towards server costs are appreciated!"
    }
}

// Loop through each user in the 'data' array and display their information on the page
users.data.forEach(function (el) {
    document.write(`<h1>${el.id}<h1>`)
    document.write(`<h2>${el.first_name}${el.last_name}<h2>`)
    document.write(`<h2>${el.email}<h2>`)
    document.write(`<img src=${el.avatar}>`)
})

// Get the button element from the document
let buttonA = document.querySelector('button')

// Function to fetch users from the API based on the specified page number
function getUsers(pageNumber) {
    // Make a fetch request to the API using the provided page number
    fetch(`https://reqres.in/api/users?page=${pageNumber}`)
        .then(function (response) {
            // Parse the response as JSON
            return response.json()
        })
        .then(function (response) {
            // Log the fetched user data to the console
            console.log(response.data)
            
            // Loop through each user in the fetched data and display their information on the page
            response.data.forEach(function (el) {
                document.write(`<h1>${el.id}<h1>`)
                document.write(`<h2>${el.first_name}${el.last_name}<h2>`)
                document.write(`<h2>${el.email}<h2>`)
                document.write(`<img src=${el.avatar}>`)
            })
        })
}

// Add an event listener to the button that triggers the getUsers function when clicked
buttonA.addEventListener('click', function () {
    // Call the getUsers function with page number 2 when the button is clicked
    getUsers(2)
})
