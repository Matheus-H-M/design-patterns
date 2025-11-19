// Class representing a Light
class Luz {
    // Method to turn the light on
    ligar(){
        console.log("Luz acesa"); // Prints "Light on" to the console (in Portuguese)
    }
}

// Command class responsible for triggering the "turn on light" action
class ComandoLigarLuz {
    // Constructor receives a Light object
    constructor(luz){
        this.luz = luz; // Stores the light instance
    }

    // Method that executes the command
    executar(){
        this.luz.ligar(); // Calls the light's "turn on" method
    }
}

// Creates a new Light instance
const luz = new Luz();

// Creates a command that will turn the light on
const comando = new ComandoLigarLuz(luz);

// Executes the command
comando.executar();


