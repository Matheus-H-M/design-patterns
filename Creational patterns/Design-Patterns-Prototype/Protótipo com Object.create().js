// Create an object to be used as a prototype, with a method 'greet'
const personPrototype = {
    greet() {
        console.log(`Olá, meu nome é ${this.name}`); // Logs a greeting message using the object's 'name' property
    }
};

// Create a new object 'person' that inherits from 'personPrototype'
const person = Object.create(personPrototype);

// Add a 'name' property to the 'person' object
person.name = "Lucas";

// Call the 'greet' method from the prototype, which uses the 'name' property from 'person'
person.greet(); // Output: Olá, meu nome é Lucas
