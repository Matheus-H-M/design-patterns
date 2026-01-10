// Base class for handling commands (Chain of Responsibility pattern)
class CommandHandler {

    // Sets the next handler in the chain
    setNext(next) {
        // Store the next handler
        this.next = next;

        // Return the next handler to allow chaining
        return next;
    }

    // Executes the command
    execute(command) {
        // If there is another handler in the chain,
        // pass the command to it
        if (this.next) this.next.execute(command);
    }
}

// Concrete handler for the "start" command
class StartCommand extends CommandHandler {

    // Override execute method
    execute(command) {
        // Check if the command is "start"
        if (command === "start") {
            // Action performed when "start" command is received
            console.log("Iniciando processo...");
        } else {
            // If this handler cannot process the command,
            // pass it to the next handler in the chain
            super.execute(command);
        }
    }
}

// Concrete handler for the "stop" command
class StopCommand extends CommandHandler {

    // Override execute method
    execute(command) {
        // Check if the command is "stop"
        if (command === "stop") {
            // Action performed when "stop" command is received
            console.log("Parando processo...");
        } else {
            // If this handler cannot process the command,
            // pass it to the next handler in the chain
            super.execute(command);
        }
    }
}

// Create the first handler in the chain
const chain = new StartCommand();

// Set the next handler in the chain
// ⚠️ NOTE: setNext expects another CommandHandler instance,
// but a string ("start") is being passed here
chain.setNext("start");

// Execute the command "stop"
// This will try to pass the command through the chain
chain.execute("stop");
