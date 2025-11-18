// Class representing a Button
class Botao {
    constructor(commando) {
        // Store the command object that will be executed when the button is clicked
        this.comando = commando;
    }

    // Method that simulates clicking the button
    clicar() {
        // Execute the command associated with this button
        this.comando.executar();
    }
}

// Class representing the action "Open Door"
class AbrirPorta {
    // Method that performs the action
    executar() {
        console.log("Door opened");
    }
}

// Create a new button and assign it the "Open Door" command
const botao = new Botao(new AbrirPorta());

// Simulate clicking the button, which triggers the command
botao.clicar();
