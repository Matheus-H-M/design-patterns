// Class representing a TV
class TV {
    // Method to turn the TV on
    ligar() {
        console.log("TV ligada"); // Prints "TV on" (in Portuguese)
    }

    // Method to turn the TV off
    desligar() {
        console.log("TV desligada"); // Prints "TV off" (in Portuguese)
    }
}

// Class representing a Remote Control
class ControleRemoto {
    constructor() {
        this.comandos = []; // Stores a list of commands to be executed
    }

    // Method to add a command to the list
    adicionarComando(comando) {
        this.comandos.push(comando); // Adds a command object with an 'executar' method
    }

    // Executes all commands in order
    executar() {
        this.comandos.forEach(cmd => cmd.executar()); // Calls the 'executar' method of each command
    }
}

// Creates a new TV instance
const tv = new TV();

// Creates a new Remote Control instance
const controle = new ControleRemoto();

// Adds a command to turn the TV on
controle.adicionarComando({
    executar: () => tv.ligar()
});

// Adds a command to turn the TV off
controle.adicionarComando({
    executar: () => tv.desligar()
});

// Executes all added commands
controle.executar();
