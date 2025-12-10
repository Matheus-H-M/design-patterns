// Define a class called "Estado" (State)
class Estado {
    constructor() {
        // Initialize the current value to 0
        this.valor = 0;
        // Initialize an empty array to store the history of values
        this.historico = [];
    }

    // Method to change the current value
    alterar(novo) {
        // Save the current value in the history before changing it
        this.historico.push(this.valor);
        // Update the current value to the new value
        this.valor = novo;
    }

    // Method to go back to the previous value
    voltar() {
        // Remove the last value from the history and set it as the current value
        // If the history is empty, default to 0
        this.valor = this.historico.pop() || 0;
    }
}

// Create a new instance of Estado
const estado = new Estado();

// Change the value to 10
estado.alterar(10);

// Change the value to 20
estado.alterar(20);

// Print the current value (should be 20)
console.log(estado.valor);

// Go back to the previous value (should revert to 10)
estado.voltar();

// Print the current value (should now be 10)
console.log(estado.valor);
