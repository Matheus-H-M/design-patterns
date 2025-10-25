// Class representing a Product
class Produto {
    constructor(nome) {
        // The name (nome) of the product is stored as a property
        this.nome = nome;
    }

    // Method to display the product information in the console
    render() {
        console.log(`Produto: ${this.nome}`);
    }
}

// Class representing a Category that can contain multiple products
class Categoria {
    constructor(nome) {
        // The name (nome) of the category
        this.nome = nome;
        // An array to store all items (products) in this category
        this.itens = [];
    }

    // Method to add a product (item) to the category
    adicionar(item) {
        this.itens.push(item);
    }

    // Method to list the category and all its items
    listar() {
        // Print the category name
        console.log(`Categoria: ${this.nome}`);
        // Loop through each item in the category and call its "listar" method
        // ⚠️ However, the Produto class doesn’t have a "listar" method — it has "render".
        // So this would cause an error if you run it as-is.
        this.itens.forEach(i => i.listar());
    }
}

// Create a new category called "Electronics"
const categoria = new Categoria("Eletrônicos");

// Add some products to the category
categoria.adicionar(new Produto("TV"));
categoria.adicionar(new Produto("TV"));
categoria.adicionar(new Produto("Notebook"));

// List the category and its products
categoria.listar();
