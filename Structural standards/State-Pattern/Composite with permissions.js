// Class representing a permission (e.g., read, write, etc.)
class Permissao {
    constructor(nome) {
        // Set the name of the permission
        this.nome = nome;
    }

    // Method to return the name of the permission
    exibir() {
        return this.nome;
    }
}

// Class representing a group of permissions
class GrupoPermissao {
    constructor(nome) {
        // Set the name of the group
        this.nome = nome;

        // Initialize an empty array to store permissions
        this.permissoes = [];
    }

    // Method to add a permission to the group
    adicionar(permissao) {
        this.permissoes.push(permissao);
    }

    // Method to display the group's name and list of permissions
    exibir() {
        // Use template literals to build the string
        return `${this.nome}: [${this.permissoes.map(p => p.exibir()).join(", ")}]`;
    }
}

// Create individual permissions
const ler = new Permissao("ler");
const escrever = new Permissao("Escrever");

// Create a permission group named "Admin"
const grupo = new GrupoPermissao("Admin");

// Add permissions to the group
grupo.adicionar(ler);
grupo.adicionar(escrever);

// Display the group information in the console
console.log(grupo.exibir());
