// Mediator class responsible for handling communication between users
class Mediator {
    // Sends a message from one user to another
    enviar(mensagem, remetente) {
        // Calls the receiver's method to receive the message
        destinatario.receber(mensagem, remetente);
    }
}

// User class that represents a participant in the communication
class Usuario {
    // Constructor initializes the user's name and mediator reference
    constructor(nome, mediator) {
        this.nome = nome;           // Stores the user's name
        this.mediator = mediator;   // Stores the mediator instance
    }

    // Method used to send a message to another user
    enviar(msg, destinatario) {
        // Delegates message sending to the mediator
        this.mediator.enviar(msg, this, destinatario);
    }

    // Method intended to receive a message from another user
    enviar(msg, de) {
        // Logs the received message and sender's name to the console
        console.log(`${this.nome} recebeu "${msg}" de ${de.nome}`);
    }
}

// Creates a mediator instance
const mediator = new Mediator();

// Creates two users connected through the same mediator
const a = new Usuario("João", mediator);
const b = new Usuario("Maria", mediator);

// User 'a' sends a message to user 'b'
a.enviar("Oi!", b);
