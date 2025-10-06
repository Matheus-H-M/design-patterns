// Define an object called 'user' with properties 'name' and 'role'
const user = {
    name: "Lucas",
    role: "user"
};

// Create a Proxy for the 'user' object
// The Proxy allows us to customize behavior when interacting with the object
const userProxy = new Proxy(user, {
    // Define a 'get' trap that intercepts property access
    get(target, prop) {
        // If the property being accessed is 'role', return a custom value
        if (prop === "role") return "Oculto"; // "Oculto" means "Hidden" in Portuguese
        // Otherwise, return the actual property from the original object
        return target[prop];
    }
});

// ❌ This line has a mistake: 'user.Proxy.nome' is invalid
// 'Proxy' is not a property of the 'user' object, and 'nome' is a typo (should be 'name')
// The correct version would be: console.log(userProxy.name);
console.log(user.Proxy.nome); // ❌ This will throw an error

// This line accesses the 'role' property via the Proxy, which triggers the 'get' trap
// It will return "Oculto" instead of the actual value "user"
console.log(userProxy.role); // ✅ Output: "Oculto"
