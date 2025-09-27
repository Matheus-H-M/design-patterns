// Define a function called fetchData that takes a URL as a parameter
function fetchData(url) {
    // Use the fetch API to make a GET request to the URL
    // Then convert the response to JSON and return the resulting promise
    return fetch(url).then(res => res.json());
}

// Define a function called getUserData that takes a userId as a parameter
function getUserData(userId) {
    // Call fetchData with a URL built using the userId
    // This fetches the user data from the API endpoint
    return fetchData(`https://api.exemplo.com/users/${userId}`);
}

// Call getUserData with the user ID 1
// Once the promise resolves, log the user data to the console
getUserData(1).then(console.log);
