// Defines a class called Priority
class Prioridade {
    // Constructor receives a name and a priority level
    constructor(nome, nivel) {
        this.nome = nome;     // Name of the priority handler
        this.nivel = nivel;   // Priority level this handler is responsible for
        this.next = null;     // Reference to the next handler in the chain
    }

    // Sets the next handler in the chain
    setNext(next) {
        this.next = next;    // Assigns the next handler
        return next;         // Returns the next handler to allow chaining
    }

    // Handles a request based on the given priority level
    tratar(nivel) {
        // If this handler's level matches the request level
        if (nivel === this.nivel) {
            console.log(`Handling by ${this.nome}`);
        }
        // If it doesn't match and there is a next handler, pass the request forward
        else if (this.next) {
            this.next.tratar(nivel);
        }
        // If no handler can process the request
        else {
            console.log("No treatment available.");
        }
    }
}

// Creates priority handlers with different levels
const baixo = new Prioridade("Low", 1);
const medio = new Prioridade("Medium", 2);
const alto = new Prioridade("High", 3);

// Links the handlers in a chain: Low → Medium → High
baixo.setNext(medio).setNext(alto);

// Tests handling different priority levels
baixo.tratar(2); // Handled by Medium
baixo.tratar(3); // Handled by High
baixo.tratar(4); // No handler available
