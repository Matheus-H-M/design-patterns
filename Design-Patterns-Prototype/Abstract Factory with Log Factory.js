function LoggerFactory(env) {
    return {
        createLogger: () =>
            env === "prod"
                ? (msg) => console.log("[PROD]", msg) // If in production, prefix log with [PROD]
                : (msg) => console.log("[DEV]", msg)  // Otherwise, prefix log with [DEV]
    };
}

const logger = LoggerFactory("prod").createLogger(); // Create a logger for the 'prod' environment
logger("App iniciado"); // Logs: [PROD] App iniciado
