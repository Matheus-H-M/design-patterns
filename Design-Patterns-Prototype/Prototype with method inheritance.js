// Define a base object `animal` with a method `eat`
const animal = {
    eat() {
        console.log(`${this.name} está comendo`); // Logs "<name> is eating" in Portuguese
    }
};

// Create a new object `dog` that inherits from `animal`
const dog = Object.create(animal);

// Add a `name` property to the `dog` object
dog.name = "Rex";

// Call the inherited `eat` method, which uses the `name` property from `dog`
dog.eat(); // Output: "Rex está comendo"
