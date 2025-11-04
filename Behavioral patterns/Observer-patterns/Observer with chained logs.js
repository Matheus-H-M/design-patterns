// Define a class called ChainLogger
class ChainLogger {
    // The constructor runs when a new instance of ChainLogger is created
    constructor(name) {
        // Save the name of this logger instance
        this.name = name;
    }

    // The update() method will be called whenever an event occurs
    update(event) {
        // Log a message to the console showing which logger recorded the event
        console.log(`${this.name} registered: ${event}`);
    }
}

// Create a new Subject (assumed to be an observable-like object)
// The Subject is responsible for managing subscribers and notifying them of events
const eventos = new Subject();

// Subscribe two ChainLogger instances to the Subject
// This means both monitors will be notified whenever an event occurs
eventos.subscribe(new ChainLogger("Monitor 1"));
eventos.subscribe(new ChainLogger("Monitor 2"));

// Notify all subscribers that an event occurred
// Both "Monitor 1" and "Monitor 2" will log this event to the console
eventos.notify("Request made");