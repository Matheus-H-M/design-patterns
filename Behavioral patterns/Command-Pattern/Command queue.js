// Class that represents a queue of commands
class FilaDeComandos {
    constructor() {
        // Internal array that stores the commands
        this.fila = [];
    }

    // Method to add a command to the queue
    adicionar(comando) {
        this.fila.push(comando);
    }

    // Method to process all commands in the queue
    processar() {
        this.fila.forEach(cmd => cmd.executar()); // Executes each command's "executar" function
    }
}

// Creates a new command queue instance
const fila = new FilaDeComandos();

// Adds a command that logs "Ação" to the console
fila.adicionar({ executar: () => console.log("Ação") });

// Adds another command that logs "Ação" to the console
fila.adicionar({ executar: () => console.log("Ação") });

// Processes (executes) all commands in the queue
fila.processar();
