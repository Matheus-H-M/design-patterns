// This function is a factory for creating Material UI components
function MaterialUlFactory() {
    return {
        // Method to create a Material-style button
        createButton: () => "MaterialButton",

        // Method to create a Material-style dialog
        createDialog: () => "MaterialDialog"
    };
}

// This function is a factory for creating Bootstrap UI components
function BootstrapUlFactory() {
    return {
        // Method to create a Bootstrap-style button
        createButton: () => "BootstrapButton",

        // Method to create a Bootstrap-style dialog
        createDialog: () => "BootstrapDialog"
    };
}

// This function takes a UI factory as input and uses it to create components
function useUl(factory) {
    // Logs the created button and dialog to the console
    console.log(
        factory.createButton(),  // Create and log the button
        factory.createDialog()   // Create and log the dialog
    );
}

// Call the useUl function with the Material UI factory
useUl(MaterialUlFactory());

// If you wanted to use Bootstrap UI instead, you could call:
// useUl(BootstrapUlFactory());
