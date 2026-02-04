// Represents a Page class
class Page {
    // Constructor receives the page title and stores it
    constructor(title) {
        this.title = title;
    }

    // Accepts a visitor object and allows it to "visit" this page
    // This is part of the Visitor design pattern
    accept(visitor) {
        visitor.visitPage(this);
    }
}

// Visitor class responsible for collecting statistics
class StatsVisitor {
    // Initializes the visit counter
    constructor() {
        this.count = 0;
    }

    // Method called when a Page is visited
    // Each visit increments the counter
    visitPage(page) {
        this.count++;
    }
}

// Create a visitor instance to track page visits
const stats = new StatsVisitor();

// Create Page objects from an array of page titles
["Home", "Sobre", "Contato"]
    .map(t => new Page(t))        // Convert each title into a Page object
    .forEach(p => p.accept(stats)); // Each page accepts the visitor

// Output the total number of visited pages
console.log("Pagínas visitdas:", stats.count);
