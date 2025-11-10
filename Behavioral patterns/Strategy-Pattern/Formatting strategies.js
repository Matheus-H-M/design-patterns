// Function that takes a string 'txt' and converts it to uppercase
const formatUpper = (txt) => txt.toUpperCase();

// Function that takes a string 'txt' and converts it to lowercase
const formatLower = (txt) => txt.toLowerCase();

// Function 'formatar' that receives a string 'texto' and a strategy function 'estrategia'
// It applies the strategy function to the text and returns the result
function formatar(texto, estrategia){
    return estrategia(texto);
}

// Using the 'formatar' function to format the string "JavaScript" with the 'formatUpper' strategy
// The output will be "JAVASCRIPT"
console.log(formatar("JavaScript", formatUpper));
