// Defines a class called Rreprodutor (Player)
class Rreprodutor {

    // Constructor method, runs when a new object is created
    constructor() {
        // Sets the initial state of the player to "paused"
        this.estado = "pausado";
    }

    // Method to toggle between play and pause states
    toggle() {
        // Checks if the current state is "pausing"
        if (this.estado === "pausando") {
            // Changes the state to "playing"
            this.estado = "tocando";
            // Logs a message indicating the music is playing
            console.log("▶️ Music playing");
        } else {
            // Changes the state to "pausing"
            this.estado = "pausando";
            // Logs a message indicating the music is paused
            console.log("⏸️ Music paused");
        }
    }
}
