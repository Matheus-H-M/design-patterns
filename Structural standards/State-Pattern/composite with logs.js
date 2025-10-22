// Base Logger class with an empty log method
class Logger {
    log() {}
}

// InfoLog class extends Logger and overrides the log method
class InfoLog extends Logger {
    log() {
        console.log("Log de Informação"); // Logs an information message
    }
}

// ErrorLog class extends Logger and overrides the log method
class ErrorLog extends Logger {
    log() {
        console.log("Log de erro"); // Logs an error message
    }
}

// LogGroup class extends Logger and manages a group of logs
class LogGroup extends Logger {
    constructor() {
        super(); // Calls the constructor of the base Logger class
        this.logs = []; // Initializes an empty array to store log objects
    }

    // Adds a log object to the logs array
    add(log) {
        this.logs.push(log);
    }

    // Calls the log method of each object in the logs array
    log() {
        this.logs.forEach(I => I.log()); // Fix: changed `this.log` to `this.logs`
    }
}

// Create an instance of LogGroup
const group = new LogGroup();

// Add InfoLog and ErrorLog instances to the group
group.add(new InfoLog());
group.add(new ErrorLog());

// Call the log method to output all logs
group.log();
