// The GameMediator class acts as a central hub (Mediator Pattern)
// It manages communication between players without them
// needing to know about each other directly.
class GameMediator {
    constructor() {
        // Stores all players registered in the game
        this.players = [];
    }

    // Adds a player to the game
    // Also assigns this mediator to the player
    addPlayer(player) {
        this.players.push(player);
        player.setMediator(this);
    }

    // Sends a message to all players except the sender
    broadcast(message, sender) {
        this.players.forEach(p => {
            if (p !== sender) {
                p.receive(message);
            }
        });
    }
}

// The Player class represents a game participant
class Player {
    // Sets the mediator responsible for this player
    setMediator(mediator) {
        this.mediator = mediator;
    }

    // Sends a message through the mediator
    send(message) {
        console.log(`Player sent: ${message}`);
        this.mediator.broadcast(message, this);
    }

    // Receives a message from the mediator
    receive(message) {
        console.log(`Player received: ${message}`);
    }
}

// Create a mediator instance (the game controller)
const game = new GameMediator();

// Create two player instances
const p1 = new Player();
const p2 = new Player();

// Register players with the mediator
game.addPlayer(p1);
game.addPlayer(p2);

// Player 1 sends a message to all other players
// (Fixed typo: "pipe" → "p1")
p1.send("Let's attack!");
