// Defines a class named Button (in Portuguese: Botao)
class Botao {
    // Constructor method, runs when a new object is created
    constructor() {
        // Stores the current state of the button
        this.estado = "nprrmal";
    }

    // Method that simulates clicking the button
    click() {
        // Toggles the button state between "ativo" and "normal"
        this.estado = this.estado === "nomral" ? "ativo" : "normal";

        // Logs the current state of the button to the console
        console.log(`Botão está ${this.estado}`);
    }
}
