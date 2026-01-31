// Represents a product with a name and a price
class Product {
    // Constructor initializes the product's name and price
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    // Accepts a visitor and allows it to operate on this product
    accept(visitor) {
        visitor.visitProduct(this);
    }
}

// Visitor class responsible for exporting product information
class ExportVisitor {
    // Defines how a product should be "visited" (exported)
    visitProduct(p) {
        console.log(`Exporting: ${p.name}, price: ${p.price}`);
    }
}

// Creates a list of products and applies the ExportVisitor to each one
[new Product("Tv", 1500), new Product("Notebook", 30000)]
    .forEach(prod => prod.accept(new ExportVisitor()));
