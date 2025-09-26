// Engine class that represents the car engine
class Engine {
    // Method to start the engine
    start() {
        console.log("Engine started");
    }
}

// Lights class that represents the car lights
class Lights {
    // Method to turn on the lights
    on() {
        console.log("Lights turned on");
    }
}

// Facade class that simplifies interaction with subsystems (engine and lights)
class CarFacade {
    constructor() {
        // Create instances of subsystems
        this.lights = new Lights();  // Fix typo: "linghts" to "lights"
        this.engine = new Engine();

        // Optional: Call startCar automatically during construction (not recommended)
        // this.startCar();  // Commented out; better to call explicitly
    }

    // Method that provides a simplified interface to start the car
    startCar() {
        this.lights.on();     // Turn on the lights
        this.engine.start();  // Start the engine
    }
}

// Create a new instance of the facade
const car = new CarFacade();

// Use the facade to start the car
car.startCar();  // Outputs: "Lights turned on" and "Engine started"
