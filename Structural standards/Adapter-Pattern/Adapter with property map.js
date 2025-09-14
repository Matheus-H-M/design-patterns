// Define a function called adaptUser that takes a user object as input
function adaptUser(user) {
    // Return a new object with 'id' and 'name' properties
    // 'id' is assigned the value of user.userId
    // 'name' is assigned the value of user.userName
    return {
        id: user.userId,
        name: user.userName
    };
}

// Create an object representing a user in the old format
const oldUser = { userId: 1, userName: "Ana" };

// Call the adaptUser function with the oldUser object
// Log the result to the console
console.log(adaptUser(oldUser));
