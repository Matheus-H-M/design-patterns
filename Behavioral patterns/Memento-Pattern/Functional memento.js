// Function that creates a Memento object to store and restore state
function criarMemento(valorInicial) {

    // Current value stored in the memento
    let valor = valorInicial;

    // Array that keeps the history of previous values
    const historico = [];

    // Return an object that exposes methods to interact with the state
    return {

        // Updates the current value
        // Before updating, it saves the old value in the history
        set: (v) => {
            historico.push(valor);
            valor = v;
        },

        // Returns the current stored value
        get: () => valor,

        // Restores the previous value from history
        // If history is empty, it keeps the current value
        desfazer: () => {
            valor = historico.pop() || valor;
        }
    };
}

// Create a memento with initial value "A"
const mem = criarMemento("A");

// Change the value to "B"
mem.set("B");

// Change the value to "C"
mem.set("C");

// Undo the last change (restores value back to "B")
mem.desfazer();

// Output the current value to the console
console.log(mem.get()); // Expected output: "B"
