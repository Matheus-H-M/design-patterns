// Base class that defines a generic process
class Processo {

    // Main method that defines the execution flow (Template Method pattern)
    executar() {
        // Starts the process
        this.iniciar();

        // Executes the main step (to be defined by subclasses)
        this.passoPrincipal();

        // Executes an optional hook if it exists
        if (this.hookExtra) this.hookExtra();

        // Finalizes the process
        this.finalizar();
    }

    // Initial step of the process
    iniciar() {
        console.log("Iniciando");
    }

    // Final step of the process
    finalizar() {
        console.log("Finalizando");
    }
}

// Subclass that implements the main operation
class Operacao extends Processo {

    // Implements the main step of the process
    passoPrincipal() {
        console.log("Executando operação principal");
    }

    // Optional hook that adds extra behavior
    hookExtra() {
        console.log("Hook opcional executando");
    }
}

// Creates an instance of Operacao and runs the process
new Operacao().executar();
