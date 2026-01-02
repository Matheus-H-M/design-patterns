// Base class representing a generic page
class Pagina {

    // Method that renders the page by calling its sections
    render() {
        this.topo();      // Render the header
        this.conteudo();  // Render the main content
        this.rodape();    // Render the footer
    }

    // Method responsible for rendering the header
    topo() {
        console.log("Cabeçalho"); // Prints "Header" to the console
    }

    // Method intended to render the content (to be overridden by subclasses)
    conteudo() {}

    // Method responsible for rendering the footer
    rodape() {
        console.log("Rodapé"); // Prints "Footer" to the console
    }
}

// Subclass that represents a Contact Page
class PaginaContato extends Pagina {

    // Overrides the content method to provide specific content
    conteudo() {
        console.log("Formulário de contato"); // Prints "Contact form" to the console
    }
}

// Creates an instance of PaginaContato and renders the page
new PaginaContato().render();
