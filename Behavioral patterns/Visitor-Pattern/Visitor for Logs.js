// Class that represents a log event (the element being visited)
class LogEvent {
    // Constructor receives a message and stores it in the object
    constructor(msg) {
        this.msg = msg;
    }

    // Accepts a visitor and allows it to process this log event
    accept(visitor) {
        visitor.visitLog(this);
    }
}

// Visitor class that knows how to handle LogEvent objects
class ConsoleLoggerVisitor {
    // Method called when visiting a LogEvent
    visitLog(log) {
        // Print the log message to the console
        console.log("LOG:", log.msg);
    }
}

// Create a new log event with a message
// Then accept a ConsoleLoggerVisitor to process it
new LogEvent("Sistema iniciado").accept(new ConsoleLoggerVisitor());
