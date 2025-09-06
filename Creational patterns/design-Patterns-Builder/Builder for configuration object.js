// Function to create a configuration builder
function ConfigBuilder() {
    // Internal object to hold configuration values
    const config = {};

    // Return an object with methods to set config values
    return {
        // Method to set the host
        setHost(h) {
            config.host = h;
            return this; // Return the builder object to allow method chaining
        },

        // Method to set the port
        setPort(p) {
            config.port = p;
            return this; // Return the builder object to allow method chaining
        },

        // Final method to return the complete configuration object
        build() {
            return config;
        }
    };
}

// Use the builder to set host and port, then build the config object
const config = ConfigBuilder()
    .setHost("localhost")  // Set the host
    .setPort(3000)         // Set the port
    .build();              // Build and return the final config

// Output the final configuration object
console.log(config);