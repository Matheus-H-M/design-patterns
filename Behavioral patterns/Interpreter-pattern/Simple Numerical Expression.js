// Class that represents a numeric value in an expression
class NumberExpression {
    // Constructor receives a number and stores it
    constructor(value) {
        this.value = value;
    }

    // Returns the numeric value of this expression
    interpret() {
        return this.value;
    }
}

// Class that represents an addition operation
class AddExpression {
    // Constructor receives two expressions (left and right)
    constructor(left, right) {
        this.left = left;
        this.right = right;
    }

    // Interprets both expressions and returns their sum
    interpret() {
        return this.left.interpret() + this.right.interpret();
    }
}

// Creates an addition expression equivalent to: 5 + 10
const expr1 = new AddExpression(
    new NumberExpression(5),
    new NumberExpression(10)
);

// Calls interpret() on the expression and prints the result
console.log(expr1.interpret()); // Output: 15
