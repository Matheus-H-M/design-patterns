// Base class for the Chain of Responsibility pattern
class Handler {
    // Sets the next handler in the chain
    setNext(handler) {
        this.next = handler;
        return handler; // Allows chaining (fluent interface)
    }

    // Handles the request or passes it to the next handler
    handle(request) {
        if (this.next) {
            return this.next.handle(request);
        }
        // Executed if no handler can process the request
        console.log("Nothing could be handled.");
    }
}

// Concrete handler: Approver
class Aprovador extends Handler {
    // Handles requests with value less than 100
    handle(request) {
        if (request.valor < 100) {
            console.log("Approved by Approver");
        } else {
            // Passes the request to the next handler
            super.handle(request);
        }
    }
}

// Concrete handler: Manager
class Gerente extends Handler {
    // Handles all remaining requests
    handle(request) {
        console.log("Approved by Manager");
    }
}

// Creates the handlers
const aprovador = new Aprovador();

// Builds the chain of responsibility
aprovador
    .setNext(new Gerente())
    .setNext(new Diretor());

// Sends requests through the chain
aprovador.handle({ valor: 50 });    // Approved by Approver
aprovador.handle({ valor: 500 });   // Approved by Manager
aprovador.handle({ valor: 5000 });  // Approved by Director
