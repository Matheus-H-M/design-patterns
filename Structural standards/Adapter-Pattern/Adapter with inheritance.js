// Define a class named 'OldDevice'
class OldDevice {
    // Define a method named 'playLegacy' that logs a message to the console
    playLegacy() {
        console.log("Reproduzindo via legacy"); // Output: "Playing via legacy" (in Portuguese)
    }
}

// Define a class named 'NewDevice' that inherits from 'OldDevice'
class NewDevice extends OldDevice {
    // Define a method named 'play' that calls the inherited 'playLegacy' method
    play() {
        return this.playLegacy(); // Calls the method from the parent class
    }
}

// Create a new instance of 'NewDevice' and call its 'play' method
new NewDevice().play(); // Output: "Reproduzindo via legacy"
