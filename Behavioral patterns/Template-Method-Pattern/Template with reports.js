// Base class that defines the template for generating a report
class Relatorio {

    // Main method that defines the fixed sequence of steps
    gerar() {
        this.coletarDados(); // Collects the data needed for the report
        this.formatar();     // Formats the collected data
        this.exibir();       // Displays the final report
    }

    // Method intended to be overridden by subclasses
    // Responsible for collecting data
    coletarDados() {}

    // Method intended to be overridden by subclasses
    // Responsible for formatting the report
    formatar() {}

    // Default method to display the report
    exibir() {
        console.log("Exibindo relatório"); // Prints a message indicating the report is being displayed
    }
}

// Subclass that represents a financial report
class RelatorioFinanceiro extends Relatorio {

    // Implements data collection specific to financial reports
    coletarDados() {
        console.log("Lendo dados financeiros"); // Simulates reading financial data
    }

    // Implements formatting specific to financial reports
    formatar() {
        console.log("Formatando em PDF"); // Simulates formatting the report as a PDF
    }
}

// Creates an instance of RelatorioFinanceiro and generates the report
new RelatorioFinanceiro().gerar();
