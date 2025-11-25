// Function constructor "Mensagem" that acts like a class
function Mensagem {
    // Method to display a message in the console
    exibir(texto) {
        console.log("Mensagem:", texto); // Print the message with a label
    }
}

// Class that represents a command to display a message
class ExibirComando {
    // Constructor receives a Mensagem instance and the text to show
    constructor(msg, texto) {
        this.msg = msg;     // Store the Mensagem object
        this.texto = texto; // Store the text to display
    }

    // Method that executes the command
    executar() {
        this.msg.exibir(this.texto); // Calls the 'exibir' method to show the text
    }
}

// Creates a new ExibirComando with a Mensagem instance and a text,
// then immediately executes it
new ExibirComando(new Mensagem(), "Bem-vindo!").executar();
