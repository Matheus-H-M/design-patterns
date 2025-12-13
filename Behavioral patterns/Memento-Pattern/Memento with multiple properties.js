// Definition of the EstadoComplexo class
class EstadoComplexo {

    // Constructor method, called when a new instance is created
    constructor() {
        // Initial state object with default values
        this.estado = { x: 0, y: 0, nome: "vazio" };

        // History array used to store previous states
        this.hist = [];
    }

    // Method to change the current state
    mudar(novoEstado) {
        // Save a copy of the current state into the history array
        // (spread is intended to clone the state before modification)
        this.hist.push([...this.estado]);

        // Update the current state with the new values
        Object.assign(this.estado, novoEstado);
    }

    // Method to undo the last state change
    desfazer() {
        // Restore the last state from history
        // If history is empty, keep the current state
        this.estado = this.hist.pop() || this.estado;
    }
}
