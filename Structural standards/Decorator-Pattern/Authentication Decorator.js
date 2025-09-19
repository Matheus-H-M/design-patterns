// This function takes another function `fn` as a parameter and returns a new function
function secure(fn) {
    return function(user) {
        // Check if the user does not have the "admin" role
        if(user.role !== "admin") {
            console.log("Access denied");
            return; // Exit the function if user is not an admin
        }
        // If user is an admin, call the original function
        fn(user);
    };
}

// Function to delete a user
function deleteUser(user) {
    console.log("User deleted:", user.name);
}

// Wrap the deleteUser function with access control
const securedDelete = secure(deleteUser);

// Try to delete a user with admin role
securedDelete({name: "Ana", role: "admin"});
