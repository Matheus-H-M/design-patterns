// Defines a class named Macro
class Macro {
    // The constructor receives an array of commands
    constructor(comandos) {
        // Stores the commands in the instance
        this.comandos = comandos;
    }

    // Method that executes all commands
    executar() {
        // Iterates over each command and calls its executar() function
        this.comandos.forEach(cmd => cmd.executar());
    }
}

// Creates a new Macro instance with a list of command objects
const macro = new Macro([
    // Each object has an executar function that prints a message
    { executar: () => console.log("Starting...") },
    { executar: () => console.log("Processing...") },
    { executar: () => console.log("Finishing.") }
]);

// Executes all commands in sequence
macro.executar();
