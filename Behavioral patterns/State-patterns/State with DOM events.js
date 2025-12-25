// Create a new <div> element and store it in the variable 'caixa'
const caixa = document.createElement("div");

// Add the created <div> to the body of the HTML document
document.body.appendChild(caixa);

// Variable to keep track of the current state of the box
let estado = "normal";

// Add a click event handler to the div
caixa.onclick = () => {

    // Check if the current state is "normal"
    if (estado === "normal") {

        // Change the background color to green
        caixa.style.background = "green";

        // Update the state to "ativo" (active)
        estado = "ativo";

    } else {

        // Change the background color to gray
        caixa.style.background = "gray";

        // Reset the state back to "normal"
        estado = "normal";
    }
};