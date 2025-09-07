// Define a constructor function for creating User objects
function User(name){
    this.name = name; // Assign the name to the object
}

// Add a method to the User prototype to greet using the name
User.prototype.sayHi = function () {
    console.log(`Oi, eu sou ${this.name}`); // Log a greeting message in Portuguese
};

// Create a new User instance with the name "Ana"
const u = new User("Ana");

// Call the sayHi method to display the greeting
u.sayHi(); // Output: "Oi, eu sou Ana"
