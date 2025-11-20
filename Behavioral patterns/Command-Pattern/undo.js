// Class representing an editor that can write text
class Editor {
    // Method to write text
    escrever(texto) {
        // Store the text in the editor instance
        this.texto = texto;

        // Display the text in the console
        console.log("Text:", texto);
    }
}

// Command class that encapsulates the action of writing
class EscreverComando {
    // Constructor receives an editor instance and the text to write
    constructor(editor, texto) {
        this.editor = editor;
        this.texto = texto;
    }

    // Method that executes the writing command
    executar() {
        // Calls the write method on the editor
        this.editor.escrever(this.texto);
    }
}

// Create a new editor instance
const editor = new Editor();

// Create a command that will write "Hello, World!"
const comando = new EscreverComando(editor, "Hello, World!");

// Execute the command
comando.executar();
