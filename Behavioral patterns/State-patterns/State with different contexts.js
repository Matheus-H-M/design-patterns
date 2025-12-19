// The Context class represents the main object whose behavior
// changes depending on its internal state
class Contexto {
    constructor() {
        // Initial state is set to an instance of EstadoA
        this.estado = new EstadoA();
    }

    // Method to change the current state
    setEstado(estado) {
        this.estado = estado;
    }

    // Executes the behavior of the current state
    agir() {
        // Delegates the action to the current state's executar method
        this.estado.executar(this);
    }
}

// State A class
// Represents one possible state of the Context
class EstadoA {
    executar(ctx) {
        // Action performed when the context is in State A
        console.log("Executing State A");

        // Changes the context's state to State B
        ctx.setEstado(new EstadoB());
    }
}

// State B class
// Represents another possible state of the Context
class EstadoB {
    executar(ctx) {
        // Action performed when the context is in State B
        console.log("Executing State B");

        // Changes the context's state back to State A
        ctx.setEstado(new EstadoA());
    }
}
