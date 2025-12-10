class Documento {
    constructor() {
        // The current text content of the document
        this.texto = "";

        // A stack that stores previous states of the text
        this.pilha = [];
    }

    escrever(txt) {
        // If the stack already has 3 saved states, remove the oldest one
        if (this.pilha.length >= 3) this.pilha.shift();

        // Save the current text state before modifying it
        this.pilha.push(this.texto);

        // Append the new text to the document
        this.texto += txt;
    }

    desfazer() {
        // Restore the last saved text state (or empty string if none)
        this.texto = this.pilha.pop() || "";
    }
}
