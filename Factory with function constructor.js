// Define a constructor function called User
// It will be used to create new objects with 'name' and 'role' properties
function User(name, role){
    this.name = name;  // Assigns the value of the 'name' parameter to the object's 'name' property
    this.role = role;  // Assigns the value of the 'role' parameter to the object's 'role' property
}

// Define a function called UserFactory
// This function acts as a "factory" to create users with the default role "viewer"
function UserFactory(name){
    // Creates a new User object with the provided name and a fixed role of "viewer"
    return new User(name, "viewer");
}

// Creates a new user using the factory and prints it to the console
// In this case, it creates a user with the name "João" and the role "viewer"
console.log(UserFactory("João"));