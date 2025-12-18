// Class that represents a Light (Luz)
class Luz {
    constructor() {
        // The light starts in the "Off" state
        this.estado = new Desligada();
    }

    // Method called when the button is pressed
    pressionar() {
        // Change the current state to the next state
        this.estado = this.estado.proximo();
    }
}

// Class that represents the "Off" state
class Desligada {
    // Defines what happens when moving to the next state
    proximo() {
        // Log message indicating the light is turning on
        console.log("Turning on the light");

        // Return a new instance of the "On" state
        return new Ligada();
    }
}

// Class that represents the "On" state
class Ligada {
    // Defines what happens when moving to the next state
    proximo() {
        // Log message indicating the light is turning off
        console.log("Turning off the light");

        // Return a new instance of the "Off" state
        return new Desligada();
    }
}

// Create a new light instance
const luz = new Luz();

// Press the button for the first time (Off → On)
luz.pressionar();

// Press the button for the second time (On → Off)
luz.pressionar();
