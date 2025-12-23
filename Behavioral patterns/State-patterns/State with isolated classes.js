// Class that represents the "On" state
class EstadoLigado {
    // Constructor is called when an object of this class is created
    constructor() {
        // Prints "Ligado" (On) to the console
        console.log("Ligado");
    }
}

// Class that represents the "Off" state
class EstadoDesligado {
    // Method that executes the behavior of the Off state
    executar() {
        // Prints "Desligado" (Off) to the console
        console.log("Desligado");
    }
}

// Class that represents a power outlet (Tomada)
class Tomada {
    // Constructor initializes the outlet with the Off state
    constructor() {
        // The current state starts as EstadoDesligado
        this.estado = new EstadoDesligado();
    }

    // Method to change the current state
    mudarEstado(estado) {
        // Updates the state to the new one passed as parameter
        this.estado = estado;
    }

    // Method that performs an action based on the current state
    operar() {
        // Calls the executar() method of the current state
        this.estado.executar();
    }
}

