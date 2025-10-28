// Define a class named DOMWatcher that will "observe" DOM changes
class DOMWatcher {
    // Method that will be called whenever there's an update or change
    update(change) {
        console.log("DOM changed:", change); // Log the detected DOM change to the console
    }
}

// Create a new Subject instance to manage observers
const domObserver = new Subject();

// Subscribe a new DOMWatcher instance to the Subject
// This means the DOMWatcher will be notified whenever the Subject emits an update
domObserver.subscribe(new DOMWatcher());

// Notify all subscribed observers about a DOM change event
// In this case, it simulates the insertion of a <div> element
domObserver.notify("Element <div> inserted");
