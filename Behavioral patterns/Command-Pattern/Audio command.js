// Class that represents an audio player
class AudioPlayer {
    // Method that plays music
    tocar() {
        console.log("Playing music...");
    }
}

// Class that represents the command to play music
class ComandoTocarMusica {
    // Receives an AudioPlayer instance
    constructor(player) {
        this.player = player;
    }

    // Executes the command: plays the music using the player
    executar() {
        this.player.tocar();
    }
}

// Creates a new command with a new AudioPlayer and executes it
new ComandoTocarMusica(new AudioPlayer()).executar();
