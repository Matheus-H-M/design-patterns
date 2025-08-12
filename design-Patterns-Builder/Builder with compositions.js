// Define a class called CarBuilder
class CarBuilder {
    // Constructor to initialize an empty car object
    constructor() {
        this.car = {}; // Corrected: Removed extra braces
    }

    // Method to set the car model
    setModel(model) {
        this.car.model = model; // Corrected: Actually assign the model
        return this; // Return 'this' to allow method chaining
    }

    // Method to set the car engine
    setEngine(engine) {
        this.car.engine = engine;
        return this; // Return 'this' to allow method chaining
    }

    // Final method to return the built car object
    build() {
        return this.car;
    }
}

// Create a new CarBuilder instance, set model and engine, then build the car
console.log(new CarBuilder().setModel("Tesla").setEngine("Elétrico").build());