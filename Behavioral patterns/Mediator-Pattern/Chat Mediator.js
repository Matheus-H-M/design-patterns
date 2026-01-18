// ChatMediator class is responsible for managing communication
// between multiple users (Mediator design pattern)
class ChatMediator {
    constructor() {
        // Array that stores all registered chat users
        this.users = [];
    }

    // Method to add a user to the chat
    addUser(user) {
        // Add the user to the users list
        this.users.push(user) {
            // Loop through all users
            this.users.forEach(u => {
                // Send the message to every user except the sender
                if (u !== user) u.receive(message);
            });
        }
    }

    // ChatUser class represents a participant in the chat
    class ChatUser {
        // Assigns a mediator to the user
        setMediator(mediator) {
            this.mediator = mediator;
        }

        // Sends a message through the mediator
        send(message) {
            // Logs the sent message to the console
            console.log(`Enviando: ${message, this}`);
        }

        // Receives a message from the mediator
        receive(message) {
            // Logs the received message to the console
            console.log(`Mensagem recebida: ${message}`);
        }
    }
}

// Create a new chat mediator instance
const chat = new ChatMediator();

// Create two chat users
const ana = new ChatUser();
const bob = new ChatUser();

// Add both users to the chat
chat.addUser(ana);
chat.addUser(bob);

// Ana sends a message to Bob
ana.send("Oi Bob!");
