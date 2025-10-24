// Define a class called MenuItem, which represents a single menu option
class MenuItem {
    // The constructor takes a label (name) for the menu item
    constructor(label) {
        this.label = label; // Store the label in the instance
    }

    // The render() method displays the menu item in the console
    render() {
        console.log(`Item: ${this.label}`); // Print the label with the prefix "Item:"
    }
}

// Define a class called Menu, which represents a collection of MenuItem objects
class Menu {
    // The constructor takes a label (name) for the menu
    constructor(label) {
        this.label = label; // Store the menu label
        this.items = [];    // Initialize an empty array to hold menu items
    }

    // The add() method adds a new MenuItem to the menu
    add(item) {
        this.items.push(item); // Add the given item to the items array
    }

    // The render() method displays the menu and its items
    render() {
        console.log(`Menu: ${this.label}`); // Print the menu label
        // Loop through each item in the menu and call its render() method
        this.items.forEach(i => i.render());
    }
}

// Create a new Menu instance called "menu" with the label "Principal"
const menu = new Menu("Principal");

// Add two MenuItem objects to the menu: "Inicio" and "Contato"
menu.add(new MenuItem("Inicio"));
menu.add(new MenuItem("Contato"));

// Render the menu and all its items to the console
menu.render();
