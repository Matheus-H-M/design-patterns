// Define a function called DOMFacade that takes a CSS selector as a parameter
function DOMFacade(selector) {
    // Use document.querySelector to get the first element that matches the selector
    const el = document.querySelector(selector);

    // Return an object with three methods to interact with the selected element
    return {
        // Method to hide the element (sets display to "none")
        hide: () => el.style.display = "none",

        // Method to show the element (sets display to "block")
        show: () => el.style.display = "block",

        // Method to change the text content of the element
        text: (msg) => el.textContent = msg
    };
}

// Create an instance of the DOMFacade for the element with ID "box"
const box = DOMFacade('#box');

// Set the text content of the box element to "Olá!" (which means "Hello!" in Portuguese)
box.text('Olá!');
