// Class that represents a delayed command
class ComandoAtrasado {
    // Constructor receives a message and a delay time in milliseconds
    constructor(mensagem, delay) {
        this.mensagem = mensagem; // Stores the message
        this.delay = delay;       // Stores the delay
    }

    // Method that executes the command after the given delay
    executar() {
        setTimeout(() => {
            console.log(this.mensagem); // Prints the message to the console
        }, this.delay); // Time to wait before executing
    }
}

// Creates a new delayed command and executes it
// In this case, it prints the message after 2 seconds (2000 ms)
new ComandoAtrasado("Executando depois de 2s", 2000).executar();
