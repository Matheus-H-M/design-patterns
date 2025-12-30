// Base class that represents a generic message
class Mensagem {
    // Public method that defines the steps to send a message
    enviar() {
        this.compor();      // Compose the message
        this.transmitir();  // Transmit the message
        this.confirmar();   // Confirm that the message was sent
    }

    // Method to compose the message (to be overridden by subclasses)
    compor() {}

    // Method to transmit the message (to be overridden by subclasses)
    transmitir() {}

    // Method that confirms the message was sent
    confirmar() {
        console.log("Message sent");
    }
}

// Subclass that represents an SMS message
class MensagemSMS extends Mensagem {
    // Implementation of how an SMS is composed
    compor() {
        console.log("Writing SMS");
    }

    // Implementation of how an SMS is transmitted
    transmitir() {
        console.log("Sending via carrier");
    }
}

// Create an SMS message and send it
new MensagemSMS().enviar();