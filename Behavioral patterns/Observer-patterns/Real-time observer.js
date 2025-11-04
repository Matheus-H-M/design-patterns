// Define a class named TempoReal
class TempoReal {
    // Method that will be called when an update occurs
    update(data) {
        // Log a message to the console showing the received update and the date
        console.log("Update received:", new Date(data));
    }
}

// Create a new Subject (this assumes that Subject is defined somewhere else)
const atualizador = new Subject();

// Subscribe an instance of TempoReal to the Subject
// This means that whenever the Subject sends a notification,
// the TempoReal instance's update() method will be called
atualizador.subscribe(new TempoReal());

// Notify all subscribers with the current timestamp
// Date.now() returns the current time in milliseconds since January 1, 1970
atualizador.notify(Date.now());
