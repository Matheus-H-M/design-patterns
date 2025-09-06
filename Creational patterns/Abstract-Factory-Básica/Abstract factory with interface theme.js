// Factory function that creates light-themed UI components
function LightFactory() {
    return {
        // Method that creates a card with white background and black text
        createCard: () => ({ bg: "white", text: "black" })
    };
}

// Factory function that creates dark-themed UI components
function DarkFactory() {
    return {
        // Method that creates a card with black background and white text
        createCard: () => ({ bg: "black", text: "white" })
    };
}

// Function that returns either the dark or light factory based on the mode
function getUlFactory(mode) {
    // If mode is 'dark', return dark factory; otherwise, return light factory
    return mode === "dark" ? DarkFactory() : LightFactory();
}

// Logs the card created by the light theme factory
console.log(getUlFactory("light").createCard()); 
// Output: { bg: 'white', text: 'black' }
