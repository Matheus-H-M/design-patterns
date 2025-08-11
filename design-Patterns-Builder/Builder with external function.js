// Function to create a builder for a person object
function createPersonBuilder() {
    // Create an empty person object
    const person = {};
    
    // Return an object with chainable methods
    return {
        // Method to set the name
        withName(n) {
            person.name = n;
            return this; // Return the builder to allow chaining
        },
        // Method to set the age
        withAge(a) {
            person.age = a;
            return this; // Return the builder to allow chaining
        },
        // Method to return the final built person object
        build() {
            return person;
        }
    };
}

// Use the builder to create a person with name and age
const person = createPersonBuilder()
    .withName("Maria")
    .withAge(30)
    .build();

// Output the created person object
console.log(person);