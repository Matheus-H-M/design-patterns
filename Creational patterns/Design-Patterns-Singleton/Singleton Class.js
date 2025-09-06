class AppConfig {
    constructor() {
        // If an instance of AppConfig already exists, return that instance.
        if (AppConfig.instance) return AppConfig.instance;

        // Otherwise, initialize the instance with default properties.
        this.version = "1.0";

        // Set the static `instance` property to refer to the current instance.
        AppConfig.instance = this;
    }
}

const a = new AppConfig();  // First instance of AppConfig.
const b = new AppConfig();  // Second attempt to create an instance of AppConfig.
console.log(a === b);  // Compare if both `a` and `b` refer to the same instance.