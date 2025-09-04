// Function that returns a themed page creator
function ThemeFactory(theme) {
    // Check if the provided theme is either "light" or "dark"
    if (!["light", "dark"].includes(theme)) throw "Invalid theme";

    // Return an object with a method to create a themed page
    return {
        createPage: () => `Page with ${theme} theme`
    };
}

// This will throw an error because "dark." (with a period) is not a valid theme
console.log(ThemeFactory("dark.").createPage());
