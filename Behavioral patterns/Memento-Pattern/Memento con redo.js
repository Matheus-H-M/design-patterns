// Class that implements an advanced history mechanism (undo/redo)
class HistoricoAvancado {
    constructor() {
        // Stack that stores past values (used for undo)
        this.passado = [];

        // Stack that stores future values (used for redo)
        this.futuro = [];

        // Current value/state
        this.valor = null;
    }

    // Sets a new value and saves the current value in history
    set(v) {
        // Save the current value in the past stack
        this.passado.push(this.valor);

        // Update the current value
        this.valor = v;

        // Clear the future stack because redo is no longer valid
        this.futuro = [];
    }

    // Undo the last change
    desfazer() {
        // Save the current value in the future stack
        this.futuro.push(this.valor);

        // Restore the most recent value from the past stack
        this.valor = this.passado.pop();
    }

    // Redo the last undone change
    refazer() {
        // Save the current value in the past stack
        this.passado.push(this.valor);

        // Restore the most recent value from the future stack
        this.valor = this.futuro.pop();
    }
}
