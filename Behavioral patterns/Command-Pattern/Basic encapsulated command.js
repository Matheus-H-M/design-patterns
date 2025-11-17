// Class that represents a command
// It receives a function and stores it in 'executar'
class Command {
    constructor(executar) {
        this.executar = executar; // Saves the function passed to the command
    }
}

// Creates a new command called 'ligarLuz'
// The command executes a function that logs "Luz ligada" to the console
const ligarLuz = new Command(() => console.log("Luz ligada"));

// Executes the command's function
ligarLuz.executar();
