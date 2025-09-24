// Define a function named 'bold' that wraps the input 'text' with <br> and </br> tags
const bold = (text) => `<br>${text}</br>`;

// Define a function named 'italic' that wraps the input 'text' with <li> and </li> tags
const italic = (text) => `<li>${text}</li>`;

// Define a function named 'decorate' that first applies 'italic' to the input text,
// then applies 'bold' to the result. So the final text is nested inside both tags.
const decorate = (text) => bold(italic(text));

// Call the 'decorate' function with the argument "Texto" and print the result to the console.
// The output will be: <br><li>Texto</li></br>
console.log(decorate("Texto"));
