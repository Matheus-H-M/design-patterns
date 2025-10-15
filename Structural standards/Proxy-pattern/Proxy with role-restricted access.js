// Function to create a secure proxy object based on the user's role
function createSecureProxy(user) {
    // Return a new Proxy object that wraps around the target object
    return new Proxy(
        // Target object that holds sensitive data
        { dashboard: "dados confidencias" }, // Portuguese for "confidential data"
        {
            // Handler object with a 'get' trap to control property access
            get(target, prop) {
                // If the user is not 'admin', deny access
                if (user !== "admin") return "Sem permissão"; // Portuguese for "No permission"

                // If the user is 'admin', return the requested property from the target object
                return target[prop];
            }
        }
    );
}

// Create a proxy for a user who is not an admin
const proxy = createSecureProxy("user"); // This user will not have access to confidential data
