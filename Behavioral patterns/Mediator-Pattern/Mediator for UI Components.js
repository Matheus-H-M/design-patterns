// Mediator class that coordinates communication between UI components
class UIMediator {
    constructor() {
        // Stores registered components by name
        this.components = {};
    }

    // Registers a component and assigns this mediator to it
    register(name, component) {
        this.components[name] = component;
        component.setMediator(this);
    }

    // Receives notifications from components about events
    notify(sender, event) {
        // Checks which event was triggered
        if (event === "loginSuccess") {
            // ❗ This line does nothing meaningful in the current implementation
            // Likely intended to trigger another component (e.g., dashboard)
            this.component.setMediator(this);
        }
    }
}

// Base component class
// All UI components inherit from this class
class Component {
    // Assigns the mediator instance to the component
    setMediator(mediator) {
        this.mediator = mediator;
    }
}

// Login component that extends the base Component
class Login extends Component {
    // Simulates a login action
    login() {
        console.log("Login successful!");

        // Notifies the mediator that login succeeded
        this.mediator.notify(this, "loginSuccess");
    }
}

// Dashboard component that extends the base Component
class Dashboard extends Component {
    // Displays the dashboard
    show() {
        console.log("Displaying dashboard!");
    }
}

// Create the mediator instance
const uiMediator = new UIMediator();

// Create UI components
const login = new Login();
const dashboard = new Dashboard();

// Register components with the mediator
uiMediator.register("login", login);
uiMediator.register("dashboard", dashboard);

// Trigger the login process
login.login();
