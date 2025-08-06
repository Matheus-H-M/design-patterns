class ProductBuilder {
    constructor() {
        this.product = {}; // Initialize an empty product object
    }

    setName(n) {
        this.product.name = n; // Set the product name
        return this;           // Return 'this' to allow method chaining
    }

    setPrice(p) {
        if (p < 0) throw "Invalid Price"; // Throw an error if price is negative
        this.product.price = p;           // Set the product price
        return this;
    }

    build() {
        return this.product; // Return the final product object
    }
}

// Example usage:
console.log(
    new ProductBuilder().setName("TV").setPrice(1200).build()
);