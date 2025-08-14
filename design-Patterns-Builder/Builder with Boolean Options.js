class SettingsBuilder {
    constructor() {
        // Initialize an empty settings object
        this.settings = {};
    }

    enableDarkMode() {
        // Ensure the 'dark' object exists before assigning properties to it
        if (!this.settings.dark) {
            this.settings.dark = {};
        }
        // Set a property inside 'dark' (example: enabling notifications in dark mode)
        this.settings.dark.notifications = true;
        return this; // Enable method chaining
    }

    enableNotifications() {
        // Set global notifications to true
        this.settings.notifications = true;
        return this; // Enable method chaining
    }

    build() {
        // Return the final settings object
        return this.settings;
    }
}

// Example usage: enable dark mode and build the settings object
console.log(new SettingsBuilder().enableDarkMode().build());
