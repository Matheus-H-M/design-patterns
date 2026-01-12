// Base Logger class (Chain of Responsibility pattern)
class Logger {

    // Sets the next logger in the chain
    setNext(logger){
        this.next = logger;
        return logger; // Allows chaining (e.g., logger1.setNext(logger2))
    }

    // Default log method
    // If this logger can't handle the message,
    // it forwards it to the next logger in the chain
    log(msg, nivel){
        if(this.next) this.next.log(msg, nivel);
    }
}

// Logger responsible for handling "info" level messages
class InfoLogger extends Logger {

    // Overrides the log method
    log(msg, nivel){
        // If the log level is "info", handle it here
        if(nivel === "info"){
            console.log("INFO", msg);
        } else {
            // Otherwise, pass the message to the next logger
            super.log(msg, nivel);
        }
    }
}

// Logger responsible for handling "error" level messages
class ErrorLogger extends Logger {

    // Overrides the log method
    log(msg, nivel){
        // If the log level is "error", handle it here
        if(nivel === "error"){
            console.error("ERROR:", msg);
        } else {
            // Otherwise, pass the message to the next logger
            super.log(msg, nivel);
        }
    }
}

// Create the first logger in the chain
const log = new InfoLogger();

// Set the next logger in the chain
log.setNext(new ErrorLogger());

// This message will be handled by InfoLogger
log.log("Tudo certo", "info");

// This message will NOT be handled because "erro" !== "error"
// It will pass through the chain without being logged
log.log("Algo deu errado", "erro");
