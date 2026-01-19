// EventMediator class implements a simple publish/subscribe (observer) pattern
class EventMediator {
    constructor() {
        // Stores events as keys and arrays of callback functions as values
        this.events = {};
    }

    // Subscribes a function (fn) to a specific event
    subscribe(event, fn) {
        // If the event does not exist yet, create an empty array for it
        if (!this.events[event]) {
            this.events[event] = [];
        }

        // Add the callback function to the event's list
        this.events[event].push(fn);
    }

    // Publishes an event and sends data to all subscribed functions
    publish(event, data) {
        // Check if the event exists
        if (this.events[event]) {
            // Execute each subscribed function, passing the data
            this.events[event].forEach(fn => fn(data));
        }
    }
}

// Create a new mediator instance
const mediatorEvent = new EventMediator();

// Subscribe to the "Log" event
mediatorEvent.subscribe("Log", msg => {
    console.log("Log:", msg);
});

// Publish the "Log" event with a message
mediatorEvent.publish("Log", "Evento disparado!");
