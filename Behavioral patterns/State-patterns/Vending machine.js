// Class that represents a vending machine
class MaquinaVendas {

    // Constructor initializes the machine's initial state
    constructor() {
        // The machine starts waiting for a coin
        this.estado = "Esperando";
    }

    // Method to insert a coin into the machine
    inserirMoeda() {
        // Check if the machine is waiting for a coin
        if (this.estado == "esperando") {
            // Log a message indicating the coin was inserted
            console.log("Coin inserted");

            // Change the state to indicate payment is in progress
            this.estado = "pagando";
        }
    }

    // Method to deliver the product
    entregarProduto() {
        // Check if the machine is in the paying state
        if (this.estado === "pagando") {
            // Log a message indicating the product was delivered
            console.log("Product delivered");

            // Reset the state back to waiting
            this.estado = "esperando";
        }
    }
}