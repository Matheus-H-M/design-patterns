// Define a class called SettingsBuilder to help build a settings object step-by-step
class SettingsBuilder {
    // Constructor is called when a new instance of the class is created
    constructor() {
        this.settings = {}; // Initialize an empty object to store settings
        return this;        // Return the instance to allow method chaining
    }

    // Method to enable dark mode setting
    enableDarkMode() {
        this.settings.darkMode = true; // Set darkMode property to true
        return this;                   // Return the instance for method chaining
    }

    // Method to enable notifications setting
    enableNotification() {
        this.settings.notifications = true; // Set notifications property to true
        return this;                        // Return the instance for method chaining
    }

    // Method to return the final settings object
    build() {
        return this.settings; // Return the built settings object
    }
}

// Create a new SettingsBuilder instance, enable dark mode, build the settings,
// and print the resulting object to the console
console.log(new SettingsBuilder().enableDarkMode().build());

// Output will be: { darkMode: true }
