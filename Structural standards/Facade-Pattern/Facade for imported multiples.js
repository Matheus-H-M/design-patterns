// Define a utility object called 'Utils' with two functions
const Utils = {
    // 'upper' function: takes a string 'txt' and returns it in uppercase
    upper: (txt) => txt.toUpperCase(),

    // 'reverse' function: takes a string 'txt', splits it into an array of characters,
    // reverses the array, then joins it back into a string
    reverse: (txt) => txt.split("").reverse().join("")
};

// Define a function 'textFacade' that receives a 'text' string as input
function textFacade(text){
    return {
        // 'gritar' method: uses Utils.upper to convert the text to uppercase
        gritar: () => Utils.upper(text),

        // 'inverter' method: uses Utils.reverse to reverse the text
        inverter: () => Utils.reverse(text)
    };
}

// Create an object 'tools' by calling textFacade with the string "JavaScript"
const tools = textFacade("JavaScript");

// Log the results of calling the 'gritar' and 'inverter' methods
console.log(tools.gritar(), tools.inverter());

// Output will be:
// JAVASCRIPT tpircSavaJ
