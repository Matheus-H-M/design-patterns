// Base Element class
// Declares the accept method that receives a visitor
class Element {
    accept(visitor) {
        // Allows the visitor to "visit" this element
        visitor.visit(this);
    }
}

// Concrete element A
class ConcreteElementA extends Element {
    // Specific operation for Element A
    operationA() {
        console.log("Operation A on Element A");
    }
}

// Concrete element B
class ConcreteElementB extends Element {
    // Specific operation for Element B
    operationB() {
        console.log("Operation B on Element B");
    }
}

// Visitor base class
// Declares the visit method
class Visitor {
    visit(element) {}
}

// Concrete visitor that implements behavior
// for each concrete element type
class ConcreteVisitor extends Visitor {
    visit(element) {
        // If the element is of type ConcreteElementA,
        // call its specific operation
        if (element instanceof ConcreteElementA) {
            element.operationA();

        // If the element is of type ConcreteElementB,
        // call its specific operation
        } else if (element instanceof ConcreteElementB) {
            element.operationB();
        }
    }
}

// Create a list of elements
const elements = [
    new ConcreteElementA(),
    new ConcreteElementB()
];

// Create a visitor instance
const visitor = new ConcreteVisitor();

// Apply the visitor to each element
elements.forEach(el => el.accept(visitor));
