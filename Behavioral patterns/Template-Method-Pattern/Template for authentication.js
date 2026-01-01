// Base class responsible for handling authentication flow
class Autenticacao {

    // Main method that controls the authentication process
    processar() {
        // Step 1: Receive user data (to be implemented by subclasses)
        this.receberDados();

        // Step 2: Validate the received data
        this.validar();

        // Step 3: Send a response after validation
        this.responder();
    }

    // Method intended to receive authentication data
    // This is meant to be overridden by subclasses
    receberDados() {}

    // Method intended to validate authentication data
    // This is meant to be overridden by subclasses
    validar() {}

    // Method responsible for responding after processing
    responder() {
        // Logs a message indicating the login is being processed
        console.log("Login processing");
    }
}

// Subclass that handles authentication using email and password
class LoginEmail extends Autenticacao {

    // Overrides the method to receive email and password
    receberDados() {
        // Logs a message indicating email and password are being received
        console.log("Receiving email and password");
    }

    // Overrides the method to validate email credentials
    validar() {
        // Logs a message indicating credentials are being checked
        console.log("Checking credentials");
    }
}

// Creates an instance of LoginEmail and starts the authentication process
new LoginEmail().processar();
