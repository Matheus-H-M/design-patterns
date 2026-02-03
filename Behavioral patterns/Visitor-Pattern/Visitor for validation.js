// Defines a User class
class User {
    // Constructor initializes the user's name and email
    constructor(name, email) {
        this.name = name;   // Stores the user's name
        this.email = email; // Stores the user's email
    }

    // Accepts a visitor object and allows it to operate on this User
    accept(visitor) {
        visitor.visitUser(this);
    }
}

// Defines a visitor class responsible for validation
class ValidationVisitor {
    // Method that receives a User object and validates its email
    visitUser(user) {
        // Checks if the email contains "@" and logs the result
        console.log(
            user.email.includes("@")
                ? "Valid email"
                : "Invalid email"
        );
    }
}

// Creates a new User instance and applies the ValidationVisitor to it
new User("João", "joao@email.com").accept(new ValidationVisitor());
