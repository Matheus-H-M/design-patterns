// Define a class called Bolsa (means "Stock Exchange" or "Bag" in Portuguese)
class Bolsa {
    // The update method will be called when a notification is received
    update(valor) {
        console.log("Stock went up to:", valor);
    }
}

// Create a new Subject (the Subject class should be defined elsewhere)
// It represents the observable that notifies its observers
const mercado = new Subject();

// Subscribe a new Bolsa instance to the Subject
// This means Bolsa will receive updates from the Subject
mercado.subscribe(new Bolsa());

// Notify all subscribers (in this case, Bolsa) with a message
// The Bolsa's update() method will be called with this value
mercado.notify("R$ 112.50");
