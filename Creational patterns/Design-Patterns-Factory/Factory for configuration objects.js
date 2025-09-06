// Defines a function named configFabrica that takes one parameter 'env' (short for environment)
function configFabrica(env) {

    // If the environment is "prod" (production)
    // Return an object with production-specific settings
    if (env === "prod") return { text: "remote", cache: true };

    // If the environment is "dev" (development)
    // Return an object with development-specific settings
    if (env === "dev") return { db: "localhost", cache: false };
}

// Calls the configFabrica function with "dev" as the argument
// And logs the result to the console
console.log(configFabrica("dev"));