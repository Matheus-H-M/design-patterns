// Class that represents a Logger (responsible for logging messages)
class Logger {
    // The update method will be called when there is a new message
    update(msg) {
        console.log("Log:", msg); // Prints a log message to the console
    }
}

// Class that represents a Notifier (responsible for sending notifications)
class Notificador {
    // The update method will be called when there is a new message
    update(msg) {
        console.log("Notification:", msg); // Prints a notification message to the console
    }
}

// Creates a new instance of Subject (the main system that notifies observers)
// Note: Subject should be a class that manages subscriptions and notifications.
// It is assumed that it has 'subscribe' and 'notify' methods.
const sistema = new Subject();

// Subscribes a new Logger observer to the system
sistema.subscribe(new Logger());

// Subscribes a new Notifier observer to the system
sistema.subscribe(new Notificador());

// Sends a notification to all subscribed observers
sistema.notify("User logged in");
