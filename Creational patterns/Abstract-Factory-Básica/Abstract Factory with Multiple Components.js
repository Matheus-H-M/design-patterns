// Factory function for mobile UI components
function MobileUlFactory() {
    return {
        // Method to create a mobile-specific header
        createHeader: () => "MobileHeader",

        // Method to create a mobile-specific footer
        createFooter: () => "MobileFooter"
    };
}

// Factory function for desktop UI components
function DesktopUlFactory() {
    return {
        // Method to create a desktop-specific header
        createHeader: () => "DesktopHeader",

        // Method to create a desktop-specific footer
        createFooter: () => "DesktopFooter"
    };
}

// Function to select the appropriate factory based on the device type
function getFactory(device) {
    // If the device is "mobile", return the mobile factory; otherwise, return the desktop factory
    return device === "mobile" ? MobileUlFactory() : DesktopUlFactory();
}

// Get the UI factory for a mobile device and call its createHeader method
// This will print "MobileHeader" to the console
console.log(getFactory("mobile").createHeader());