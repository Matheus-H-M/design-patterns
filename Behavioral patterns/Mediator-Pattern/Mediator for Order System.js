// Mediator class responsible for managing communication
// between clients and stores
class OrderMediator {
    constructor() {
        // List of registered clients
        this.clients = [];
        // List of registered stores
        this.stores = [];
    }

    // Registers a client and sets this mediator for it
    registerClient(client) {
        this.clients.push(client);
        client.setMediator(this);
    }

    // Registers a store and sets this mediator for it
    registerStore(store) {
        this.stores.push(store);
        store.setMediator(this);
    }

    // Sends an order to all registered stores
    placeOrder(order) {
        this.stores.forEach(s => s.receiveOrder(order));
    }
}

// Store class that receives orders through the mediator
class Store {
    // Sets the mediator reference
    setMediator(mediator) {
        this.mediator = mediator;
    }

    // Called when an order is received
    receiveOrder(order) {
        console.log(`Store received order: ${order}`);
    }
}

// Create the mediator instance
const orderMediator = new OrderMediator();

// Create client and store instances
// (Client class is assumed to exist elsewhere)
const client = new Client();
const store = new Store();

// Register client and store with the mediator
orderMediator.registerClient(client);
orderMediator.registerStore(store);

// Client places an order through the mediator
client.makeOrder("Pizza Calabresa");
