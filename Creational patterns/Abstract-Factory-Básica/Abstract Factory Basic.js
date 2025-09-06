// Function that returns a factory object based on the selected theme
function createUlFactory(theme) {
    // If the theme is "dark", return styles for dark mode
    if (theme === "dark") {
        return {
            // Method to create a button style for dark theme
            createButton: () => ({ color: "white", background: "black" }),
            // Method to create an input style for dark theme
            createInput: () => ({ border: "1px solid white" })
        };
    } else {
        // If the theme is not "dark", return styles for light mode
        return {
            // Method to create a button style for light theme
            createButton: () => ({ color: "black", background: "white" }),
            // Method to create an input style for light theme
            createInput: () => ({ border: "1px solid black" })
        };
    }
}

// Create a factory for the "dark" theme
const factory = createUlFactory("dark");

// Log the button style for the dark theme to the console
console.log(factory.createButton());
