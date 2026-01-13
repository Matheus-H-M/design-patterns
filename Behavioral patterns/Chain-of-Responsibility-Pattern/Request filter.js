// Base filter class that represents a generic filter in the chain
class Filtro {

    // Sets the next filter in the chain
    setNext(filtro){
        this.next = filtro; // Store reference to the next filter
        return filtro;      // Return it to allow chaining
    }

    // Applies the filter logic
    aplicar(req){
        // If there is a next filter, call it
        if(this.next) this.next.aplicar(req);
    }
}

// Authentication filter that checks if the user is authenticated
class AuthFiltro extends Filtro {

    // Overrides the aplicar method
    aplicar(req){
        // Check if the request is authenticated
        if(req.auth){
            console.log("User authenticated");

            // Pass the request to the next filter
            super.aplicar(req);
        } else {
            // Stop the chain if authentication fails
            console.log("Access denied");
        }
    }
}

// Logging filter that logs request information
class LogFiltro extends Filtro {

    // Applies logging logic
    aplciar(req){
        // Log the request path
        console.log("Request log:", req.path);

        // Pass the request to the next filter
        super.aplicar(req);
    }
}

// Create an authentication filter instance
const auth = new AuthFiltro();

// Set the next filter in the chain to LogFiltro
auth.setNext(new LogFiltro());

// Execute the filter chain with a request object
auth.aplicar({ path: "/home", auth: true });
