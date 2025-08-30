// UlFactory is an Immediately Invoked Function Expression (IIFE) that creates a Singleton factory.
const UlFactory = (() => {
    // This variable will hold the single instance.
    let instance;

    // Factory function to create an object with the specified theme.
    function create(theme){
        return {
            // Returns a button string that includes the theme.
            createButton: () => `Botão ${theme}` // "Botão" means "Button" in Portuguese.
        };
    }

    // Public method to get the single instance.
    return {
        getInstance(theme){
            // If no instance exists yet, create one with the given theme.
            if(!instance) instance = create(theme);
            // Return the existing instance.
            return instance;
        }
    };
})();

// Test the Singleton by calling getInstance with the "dark" theme and creating a button.
console.log(UlFactory.getInstance("dark").createButton());
// Output: "Botão dark"
