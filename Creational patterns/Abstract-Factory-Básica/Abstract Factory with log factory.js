// Factory function that returns a logger creator based on the environment
function LoggerFactory(env) {
    return {
        createLogger: () =>
            env === "prod"
                // If environment is "prod", return a logger that prefixes messages with "[PROD]"
                ? (msg) => console.log("[PROD]", msg)
                // Otherwise, return a logger that prefixes messages with "[DEV]"
                : (msg) => console.log("[DEV]", msg)
    };
}

// Create a logger for the production environment
const logger = LoggerFactory("prod").createLogger();

// Use the logger to log a message
logger("App iniciado"); // Output: [PROD] App iniciado
