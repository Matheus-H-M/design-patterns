// Define a factory function that returns an object with icon creation methods
function IconFactory(style) {
    return {
        // Method to create a search icon based on the given style
        createSearchIcon: () =>
            style === "filled" ? "🔍" : "🔎",

        // Method to create a user icon based on the given style
        createUserIcon: () =>
            style === "filled" ? "👤" : "👦"
    };
}

// Create an icon set using the "outlined" style
const icons = IconFactory("outlined");

// Logs the outlined version of the search icon to the console (🔎)
console.log(icons.createSearchIcon());
