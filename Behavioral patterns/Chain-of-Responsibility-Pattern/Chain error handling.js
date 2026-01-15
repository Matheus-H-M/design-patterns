// Base class for error handlers (Chain of Responsibility pattern)
class TratadorErro {

    // Sets the next handler in the chain
    setNext(handler) {
        this.next = handler; // Store the next handler
        return handler;      // Return it to allow chaining
    }

    // Default error handling method
    tratar(err) {
        // If there is a next handler, pass the error to it
        if (this.next) {
            this.next.tratar(err);
        }
    }
}

// Handler for 404 (Not Found) errors
class Erro404 extends TratadorErro {

    // Override the error handling method
    tratar(err) {
        // Check if the error code is 404
        if (err.code === 404) {
            console.log("Page not found");
        } else {
            // If not handled, pass it to the next handler
            super.tratar(err);
        }
    }
}

// Handler for 500 (Internal Server Error) errors
class Erro500 extends TratadorErro {

    // Override the error handling method
    tratar(err) {
        // Check if the error code is 500
        if (err.code === 500) {
            console.log("Internal server error");
        } else {
            // If not handled, pass it to the next handler
            super.tratar(err);
        }
    }
}

// Create the first handler in the chain
const tratador = new Erro404();

// Set the next handler in the chain
tratador.setNext(new Erro500());

// Test handling a 404 error
tratador.tratar({ code: 404 });

// Test handling a 500 error
tratador.tratar({ code: 500 });
