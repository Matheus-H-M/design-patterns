// Defines a class representing an item/product
class Item {
    // Constructor initializes the item with a name and a price
    constructor(name, price) {
        this.name = name;   // Name of the item
        this.price = price; // Price of the item
    }

    // Accepts a visitor object and allows it to operate on this item
    accept(visitor) {
        visitor.visitItem(this); // Calls the visitor's method, passing this item
    }
}

// Defines a visitor class responsible for applying a discount
class DiscountVisitor {
    // Method that receives an Item and modifies its price
    visitItem(item) {
        item.price *= 0.9; // Applies a 10% discount to the item's price
    }
}

// Creates an array of Item objects with initial prices
const items = [
    new Item("Camiseta", 100), // T-shirt costing 100
    new Item("Calça", 200)     // Pants costing 200
];

// Creates an instance of the DiscountVisitor
const discount = new DiscountVisitor();

// Applies the discount visitor to each item in the array
items.forEach(i => i.accept(discount));

// Logs the updated items (with discounted prices) to the console
console.log(items);
