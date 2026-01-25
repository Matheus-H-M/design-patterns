// Mediator class responsible for handling communication
// between participants and logging messages
class LogMediator {
    constructor() {
        // Stores all registered participants
        this.participants = [];
    }

    // Registers a participant in the mediator
    register(participant) {
        // Adds the participant to the list
        this.participants.push(participant);

        // Sets this mediator instance on the participant
        participant.setMediator(this);
    }

    // Sends a message from one participant to all others
    send(message, sender) {
        // Logs the message with the sender's name
        console.log(`[LOG] ${sender.name}: ${message}`);

        // Sends the message to all participants except the sender
        this.participants.forEach(p => {
            if (p !== sender) {
                p.receive(message);
            }
        });
    }
}

// Participant class that communicates through the mediator
class Participant {
    constructor(name) {
        // Participant's name
        this.name = name;

        // Reference to the mediator (set later)
        this.mediator = null;
    }

    // Assigns a mediator to this participant
    setMediator(mediator) {
        this.mediator = mediator;
    }

    // Sends a message via the mediator
    send(message) {
        this.mediator.send(message, this);
    }

    // Receives a message from the mediator
    receive(message) {
        // Logs the received message
        console.log(`${this.name} received: ${message}`);
    }
}

// Create a mediator instance
const logger = new LogMediator();

// Create participants
const joao = new Participant("João");
const maria = new Participant("Maria");

// Register participants with the mediator
logger.register(joao);
logger.register(maria);

// João sends a message through the mediator
joao.send("Tudo certo?");
