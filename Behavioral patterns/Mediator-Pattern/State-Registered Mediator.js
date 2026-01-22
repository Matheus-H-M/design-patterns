// Mediator class responsible for managing shared state
// and notifying registered components about changes
class StateMediator {
    constructor() {
        // Object that stores the global/shared state
        this.state = {};

        // List of components that depend on the state
        this.components = [];
    }

    // Registers a component and assigns this mediator to it
    register(component) {
        this.components.push(component);
        component.setMediator(this);
    }

    // Updates a value in the state and notifies all components
    update(key, value) {
        // Store the new value in the state object
        this.state[key] = value;

        // Notify each registered component about the update
        this.components.forEach(c => c.update(key, value));
    }
}

// Base component class that communicates through the mediator
class StateComponent {
    // Sets the mediator instance for this component
    setMediator(mediator) {
        this.mediator = mediator;
    }

    // Method called when the mediator updates the state
    update(key, value) {
        // Log the updated state information
        console.log(`State updated: ${key} = ${value}`);
    }
}

// Create a mediator instance
const stateMediator = new StateMediator();

// Create two components
const comp1 = new StateComponent();
const comp2 = new StateComponent();

// Register the components with the mediator
stateMediator.register(comp1);
stateMediator.register(comp2);

// Update the state through the mediator
stateMediator.update("theme", "dark");
