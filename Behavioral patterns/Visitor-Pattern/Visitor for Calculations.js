// Class representing a number element in the Visitor pattern
class NumberElement {
    // Constructor that stores the numeric value
    constructor(value) {
        this.value = value;
    }

    // Accepts a visitor and allows it to operate on this object
    accept(visitor) {
        visitor.visitNumber(this);
    }
}

// Visitor class that calculates the sum of NumberElement values
class SumVisitor {
    // Constructor initializes the sum to zero
    constructor() {
        this.sum = 0;
    }

    // Method called when visiting a NumberElement
    // Adds the element's value to the total sum
    visitNumber(num) {
        this.sum += num.value;
    }
}

// Create an array of NumberElement objects from raw numbers
const nums = [1, 2, 3].map(n => new NumberElement(n));

// Create a SumVisitor instance
const sumVisitor = new SumVisitor();

// Apply the visitor to each NumberElement
nums.forEach(n => n.accept(sumVisitor));

// Output the final sum calculated by the visitor
console.log("Soma:", sumVisitor.sum);
