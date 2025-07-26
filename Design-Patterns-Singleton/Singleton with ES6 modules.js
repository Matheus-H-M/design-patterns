/ Create a constant object named 'settings' with two properties:
// 'theme' sets the application's theme to "dark"
// 'language' sets the language to "pt-BR" (Portuguese - Brazil)
const settings = {
    theme: "dark",
    language: "pt-BR"
};

// Use Object.freeze to make the 'settings' object immutable:
// - You can't add new properties
// - You can't remove existing properties
// - You can't change the values of existing properties
Object.freeze(settings);

// Export the 'settings' object as the default export,
// so it can be imported and used in other files/modules.
export default settings;