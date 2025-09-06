// Define a function called NotificationBuilder
function NotificationBuilder() {
    // Create an empty object to store notification data
    const data = {};

    // Return an object with methods to build the notification
    return {
        // Method to set the message of the notification
        setMessage(m) {
            data.message = m;      // Store the message in the data object
            return this;           // Return the current object to allow chaining
        },

        // Method to set the type of the notification (e.g., warning, info)
        setType(t) {
            data.type = t;         // Store the type in the data object
            return this;           // Return the current object to allow chaining
        },

        // Method to finalize and build the notification
        build() {
            // Return the notification object with data and a send method
            return {
                ...data,           // Spread the stored data (message and type)
                send: () => console.log("Enviado:", data.message)  // Method to send (log) the notification
            };
        }
    };
}

// Create and send a notification using method chaining
NotificationBuilder()
    .setMessage("Alerta!")       // Set the message to "Alert!"
    .setType("Warning")          // Set the type to "Warning"
    .build()                     // Build the notification object
    .send();                     // Send (log) the notification: "Enviado: Alerta!"