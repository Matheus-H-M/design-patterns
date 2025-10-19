// Define a class called Produto (Product)
class Produto {
    // Constructor that takes name and price as parameters
    constructor(nome, preco) {
        this.nome = nome; // Set the product name
        this.preco = preco; // Set the product price (Note: there's an extra semicolon here, but it still works)
    }

    // Method to get the price of the product
    getPreco() {
        return this.preco; // Return the price
    }
}

// Define a class called Caixa (Box or Cart)
class Caixa {
    // Constructor initializes an empty array to hold items
    constructor() {
        this.itens = []; // This array will store Produto instances
    }

    // Method to add an item (Produto) to the box
    adicionar(item) {
        this.itens.push(item); // Add the item to the itens array
    }

    // Method to get the total price of all items in the box
    getPreco() {
        // Use reduce to sum the prices of all items
        return this.itens.reduce((soma, i) => soma + i.getPreco(), 0);
    }
}

// Create a new product: "Fone" (Headphone) priced at 200
const fone = new Produto("Fone", 200);

// Create another product: "Carregador" (Charger) priced at 100
const carregador = new Produto("Carregador", 100);

// Create a new box (Caixa)
const caixa = new Caixa();

// Add both products to the box
caixa.adicionar(fone);
caixa.adicionar(carregador);

// Output the total price of all items in the box
console.log("Total", caixa.getPreco());
