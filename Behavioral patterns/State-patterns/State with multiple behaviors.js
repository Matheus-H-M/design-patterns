// Player class represents the music player itself
class Player {
    constructor() {
        // The player starts in the "Paused" state
        this.estado = new Pausado();
    }

    // This method delegates the action to the current state
    tocar() {
        // Calls the tocar() method of the current state
        // and updates the state with the returned new state
        this.estado = this.estado.tocar();
    }
}

// Paused state class
class Pausado {
    tocar() {
        // When the player is paused and "play" is pressed,
        // it starts playing the music
        console.log("▶️ Tocando música");

        // Change the state to "Playing"
        return new Tocando();
    }
}

// Playing state class
class Tocando {
    tocar() {
        // When the player is playing and "play/pause" is pressed,
        // it pauses the music
        console.log("⏸️ Pausando música");

        // Change the state back to "Paused"
        return new Pausado();
    }
}
