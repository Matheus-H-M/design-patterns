// Define a Subject class — this will manage and notify observers
class Subject {
    constructor() {
        // The Subject keeps a list of observers (subscribers)
        this.observers = [];
    }

    // Method to add an observer to the list
    subscribe(observer) {
        // ❌ Incorrect: this line calls forEach incorrectly.
        // It should add the observer to the list instead:
        // this.observers.push(observer);
        this.observers.forEach(observer);
    }

    // Method to notify all observers with some data
    notify(data) {
        // Calls the 'update' method of each observer
        this.observers.forEach(obs => obs.update(data));
    }
}

// Define an Observer class — this will receive updates from the Subject
class Observer {
    // The 'update' method is called when the Subject sends a notification
    update(data) {
        console.log("Received:", data);
    }
}

// Create a new Subject instance
const subject = new Subject();

// Subscribe a new Observer instance to the Subject
subject.subscribe(new Observer());

// Notify all observers with the message "Hello, world!"
subject.notify("Olá, mundo!"); // Portuguese for "Hello, world!"
