// Define a class called Element to represent an HTML-like element
class Element {
    // Constructor accepts a tag name (e.g., "div", "p")
    constructor(tag) {
        this.tag = tag;          // Store the tag name
        this.children = [];      // Initialize an empty list for child elements or text nodes
    }

    // Method to add a child (another Element or a TextNode)
    append(child) {
        this.children.push(child);   // Add the child to the children array
    }

    // Method to render the element and its children
    // 'indent' is used to format the output with indentation
    render(indent = "") {
        // Print the opening tag with indentation
        console.log(indent + `<${this.tag}>`);

        // Render each child with increased indentation
        this.children.forEach(c => c.render(indent + " "));

        // Print the closing tag with indentation
        console.log(indent + `<${this.tag}>`);
    }
}

// Define a class called TextNode to represent plain text content inside elements
class TextNode {
    // Constructor accepts the text content
    constructor(text) {
        this.text = text;    // Store the text
    }

    // Method to render the text node with indentation
    render(indent = "") {
        console.log(indent + this.text); // Print the text with indentation
    }
}

// Create a new <div> element
const div = new Element("div");

// Create a new <p> element
const p = new Element("p");

// Append a text node "Olá mundo" to the <p> element
p.append(new TextNode("Olá mundo"));

// Append the <p> element to the <div> element
div.append(p);

// Render the entire structure to the console
div.render();
