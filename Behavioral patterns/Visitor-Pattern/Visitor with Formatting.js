// Defines a Text class that represents some text content
class Text {
    // The constructor receives the text content and stores it
    constructor(content) {
        this.content = content;
    }

    // Accepts a visitor object and calls its visitText method,
    // passing the current Text instance
    accept(visitor) {
        visitor.visitText(this);
    }
}

// Defines a visitor class that knows how to handle Text objects
class BoldVisitor {
    // This method is called when a Text object accepts this visitor
    // It outputs the text wrapped in HTML <b> (bold) tags
    visitText(text) {
        console.log(`<b>${text.content}</b>`);
    }
}

// Creates a new Text object with the content "Olá Mundo"
// Then applies the BoldVisitor to it, printing the bold text
new Text("Olá Mundo").accept(new BoldVisitor());
