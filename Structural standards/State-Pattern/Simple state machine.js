// Class representing the machine (state context)
class Maquina {
    constructor() {
        // Initialize the machine with the initial state
        this.estado = new EstadoInicial(this);
    }

    // Method to change the current state of the machine
    setEstado(estado) {
        this.estado = estado;
    }

    // Method to execute the current state's behavior
    executar() {
        this.estado.executar();
    }
}

// Initial state of the machine
class EstadoInicial {
    constructor(maquina) {
        this.maquina = maquina; // Reference to the machine context
    }

    // Behavior for the initial state
    executar() {
        console.log("Initial State -> Moving to Processing...");
        // Switch to processing state (!!! Error below: should be this.maquina.setEstado)
        this.estado.setEstado(new EstadoProcessando(this.maquina));
    }
}

// Processing state of the machine
class EstadoProcessando {
    constructor(maquina) {
        this.maquina = maquina; // Reference to the machine context
    }

    // Behavior for the processing state
    exceutar() { // !!! Typo: should be 'executar', not 'exceutar'
        console.log("Processing -> Moving to Finalization...");
        this.maquina.setEstado(new EstadoFinalizado(this.maquina));
    }
}

// Final state of the machine
class EstadoFinalizado {
    // Behavior for the final state
    executar() {
        console.log("Finalized.");
    }
}

// Create a new machine instance
const m = new Maquina();

// Execute state transitions step by step
m.executar(); // Executes the initial state's logic
m.executar(); // Executes the processing state's logic (won't work due to typo)
m.executar(); // Executes the finalized state's logic (may not be reached)
