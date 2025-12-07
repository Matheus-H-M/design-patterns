// Class that represents a simple text editor with undo functionality
class Editor {
    constructor() {
        // Current content of the editor
        this.conteudo = "";
        // History stack to store previous states for undo
        this.historico = [];
    }

    // Method to write text in the editor
    escrever(texto) {
        // Save the current content before modifying it
        this.historico.push(this.conteudo);
        // Add new text to the existing content
        this.conteudo += texto;
    }

    // Method to undo the last change
    desfazer() {
        // Restore the last saved state or set to empty if none exists
        this.conteudo = this.historico.pop() || "";
    }
}

// Creating a new editor instance
const editor = new Editor();

// Writing "Olá"
editor.escrever("Olá");

// Writing "mundo!"
editor.escrever("mundo!");

// Prints the current content: "Olámundo!"
console.log(editor.conteudo);

// Undo the last operation
editor.desfazer();

// Prints the restored content: "Olá"
console.log(editor.conteudo);
