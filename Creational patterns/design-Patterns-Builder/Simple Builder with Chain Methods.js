// Define the UserBuilder class
class UserBuilder {
    constructor() {
        // Initialize an empty object to store user data
        this.user = {};
    }

    // Method to set the user's name
    setName(name) {
        this.user.name = name; // Store the name in the user object
        return this; // Return the current instance to allow method chaining
    }

    // Method to set the user's age
    setAge(age) {
        this.user.age = age; // Store the age in the user object
        return this; // Enable chaining more methods after this one
    }

    // Final method to return the completed user object
    build() {
        return this.user; // Return the fully built user object
    }
}

// Create a user using method chaining
const user = new UserBuilder()
    .setName("Lucas")  // Set the user's name
    .setAge(25)        // Set the user's age
    .build();          // Build and return the final user object

// Print the result to the console
console.log(user); // Output: { name: 'Lucas', age: 25 }