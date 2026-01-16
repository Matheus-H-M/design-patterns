// Defines a Chain class (Chain of Responsibility pattern)
class Chain {
    constructor() {
        // Array that will store handler functions
        this.handlers = [];
    }

    // Adds a handler to the chain
    add(handler) {
        // Loops through existing handlers
        // (Currently this loop does nothing and does not add the handler)
        for (let h of this.handlers);
    }

    // Processes the data through the chain of handlers
    process(data) {
        // Iterate over each handler in order
        for (let h of this.handlers) {
            // If the handler returns true, stop processing the chain
            if (h(data)) break;
        }
    }
}

// Create a new Chain instance
const chain = new Chain();

// Add a handler that checks if the value is less than 100
// If true, it logs a message to the console
chain.add(x => 100 && console.log("Menor que 10"));

// Add a handler that always evaluates to true (100 is truthy)
// Logs a message to the console
chain.add(x => 100 && console.log("Menor que 100"));

// Add a handler that always logs a message
chain.add(x => console.log("Maior ou igual a 100"));

// Process the value 5 through the chain
chain.process(5);

// Process the value 50 through the chain
chain.process(50);

// Process the value 150 through the chain
chain.process(150);
