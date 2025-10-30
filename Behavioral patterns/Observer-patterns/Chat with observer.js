// Define a class called 'User'
class User {
    // The constructor initializes the object with a 'nome' (name)
    constructor(nome) {
        this.nome = nome;
    }

    // The 'update' method will be called when this user receives a message
    update(msg) {
        console.log(`${this.nome} recebeu: ${msg}`); // Prints "<name> received: <message>"
    }
}

// Create a new instance of a 'Subject' (not defined in this snippet — likely from an Observable pattern)
const canal = new Subject();

// Create two users: Ana and Lucas
const ana = new User("Ana");
const lucas = new User("Lucas");

// Subscribe both users to the channel (so they can receive notifications)
canal.subscribe(ana);
canal.subscribe(lucas);

// Send a notification to all subscribed users
canal.notify("Nova mensagem no chat"); // "New message in the chat"
