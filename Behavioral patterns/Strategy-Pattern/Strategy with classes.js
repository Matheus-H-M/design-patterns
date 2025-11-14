// Defines the Context class, which will hold and execute a chosen strategy
class Contexto {
    // Method to set the strategy function
    setEstrategia(estrategia) {
        this.estrategia = estrategia;
    }

    // Method to execute the currently selected strategy with two parameters
    executar(a, b) {
        return this.estrategia(a, b);
    }
}

// Creates a new instance of Context
const contexto = new Contexto();

// Sets the strategy to a function that multiplies two numbers
contexto.setEstrategia((x, y) => x * y);

// Executes the current strategy (multiplication) with the values 2 and 3
console.log(contexto.executar(2, 3)); // Output: 6
