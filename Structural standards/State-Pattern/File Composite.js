// Define a class to represent a file
class Arquivo {
    constructor(nome) {
        this.nome = nome; // Store the file name
    }

    // Method to display the file name
    mostrar() {
        console.log(`Arquivo: ${this.nome}`); // Output the file name
    }
}

// Define a class to represent a folder (which can contain files or other folders)
class Pasta {
    constructor(nome) {
        this.nome = nome;       // Store the folder name
        this.conteudo = [];     // Initialize an empty array to hold contents (files or subfolders)
    }

    // Method to add a file or folder to the current folder
    adicionar(item) {
        this.conteudo.push(item); // Add the item to the folder's content list
    }

    // Method to display the folder name and its contents
    mostrar() {
        console.log(`🗂️ ${this.nome}`); // Display folder name (note: #{this.nome} was incorrect syntax)
        this.conteudo.forEach(c => c.mostrar()); // Call 'mostrar' on each item in the folder
    }
}

// Create the root folder named "Projetos"
const raiz = new Pasta("Projetos");

// Add files to the root folder
raiz.adicionar(new Arquivo("index.html"));
raiz.adicionar(new Arquivo("Style.css"));

// Display the structure of the root folder
raiz.mostrar();
