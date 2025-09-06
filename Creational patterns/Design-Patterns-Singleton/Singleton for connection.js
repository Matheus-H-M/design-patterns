// Define a module called 'DB' using an IIFE (Immediately Invoked Function Expression)
const DB = (() => {
    // Private variable 'conn' to store the connection
    let conn = null;

    // Return an object with a public method 'connect'
    return {
        connect: () => {
            // If 'conn' hasn't been initialized yet, create a new connection object
            if (!conn) conn = { id: Date.now(), connected: true };

            // Return the connection object (either new or existing)
            return conn;
        }
    };
})();