// Define a class to help build HTML elements using a builder pattern
class ElementBuilder{
    // Constructor: creates a new HTML element with the specified tag
    constructor(tag){ this.el = document.createElement(tag);}
    // Method to set the text content of the element
    setText(text) {
        this.el.textContent = text; return this;// Return 'this' to allow method chaining
                  }
    // Method to set the ID attribute of the element
    setId(id){
        this.el.id = id; return this;// Return 'this' to allow method chaining
    }
    // Method to return the fully built element
    build() { return this.el }
}
// Use the ElementBuilder to create a <div> with text "Oi!" and id "msg"
const el = new ElementBuilder("div")
    .setText("Oi!") // Set text content to "Oi!"
    .setId("msg") // Set the ID of the element to "msg"
    .build(); // Get the final built element

// Append the created element to the document body so it's visible on the page
document.body.appendChild(el);
