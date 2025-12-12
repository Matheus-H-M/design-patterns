// Create an <input> element dynamically
const input = document.createElement("input");

// Create a <button> element dynamically
const btn = document.createElement("button");

// Set the button text to “Desfazer” (Undo)
btn.textContent = "Desfazer";

// Add the input and button to the page
document.body.append(input, btn);

// Array to store the history of input values
const historico = [];

// Every time the user types in the input...
input.addEventListener("input", (e) => {
    // Save the current value into the history array
    historico.push(e.target.value);
});

// When the button is clicked...
btn.onclick = () => {
    // Remove the most recent value from the history
    historico.pop();

    // Set the input value to the previous saved value
    // If history is empty, set it to an empty string
    input.value = historico[historico.length - 1] || "";
};
