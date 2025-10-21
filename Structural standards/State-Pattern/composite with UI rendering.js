// Define a class called 'Component'
class Component {
    // Constructor method to initialize a Component with a name
    constructor(name) {
        this.name = name;       // Assign the given name to the component
        this.children = [];     // Initialize an empty array to hold child components
    }

    // Method to add a child component
    add(component) {
        this.children.push(component); // Add the given component to the children array
    }

    // Method to "render" the component and all its children
    render() {
        // Print the name of this component to the console
        console.log(`Render:${this.name}`);

        // Call render() on each child component recursively
        this.children.forEach(c => c.render());
    }
}

// Create instances of the Component class
const layout = new Component("Layout");    // Parent component
const sidebar = new Component("Sidebar");  // First child component
const main = new Component("Main");        // Second child component

// Add the Sidebar and Main components as children of Layout
layout.add(sidebar);
layout.add(main);

// Start rendering from the Layout component, which also renders its children
layout.render();
