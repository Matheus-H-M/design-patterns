// Define a class called 'botaoFabrica' (Portuguese for 'buttonFactory')
class botaoFabrica {

    // Static method named 'create', which receives a 'type' parameter
    static create(type) {

        // If the type is "primary", return an object representing a primary button
        if (type === "primary") return { text: "Enviar", style: "blue" };

        // If the type is "danger", return an object representing a danger button
        if (type == "danger") return { text: "Excluir", style: "red" };

        // NOTE: If the type doesn't match any condition, the method returns 'undefined'
    }
}

// Call the 'create' method with the type "danger" and log the result to the console
console.log(botaoFabrica.create("danger"));