class Carro {
    constructor() {
        // Initial state of the car
        // "desligado" means "off"
        this.estado = "desligado";

        // Object that maps each state to an action
        // Each action changes the state to the opposite one
        this.acoes = {
            // If the car is off, turn it on
            desligado: () => {
                this.estado = "ligado"; // "ligado" means "on"
                return this.estado;
            },

            // If the car is on, turn it off
            ligado: () => {
                this.estado = "desligado";
                return this.estado;
            }
        };
    }

    // Method to toggle the car state
    alternar() {
        // Execute the action that corresponds to the current state
        this.estado = this.acoes[this.estado]();

        // Print the current state to the console
        console.log("Estado:", this.estado);
    }
}
