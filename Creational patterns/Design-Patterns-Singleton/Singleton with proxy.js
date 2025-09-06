// Handler for the Proxy that enables Singleton behavior
const singletonHandler = {
    // 'construct' trap intercepts calls to 'new'
    construct(target) {
        // If an instance hasn't been created yet, create and store it
        if (!target.instance) target.instance = new target();

        // Return the existing instance every time
        return target.instance;
    }
};

// Basic class (could contain methods or properties)
class UserStore {}

// Create a Proxy that wraps the UserStore class with Singleton behavior
const SingletonUserStore = new Proxy(UserStore, singletonHandler);

// Attempt to create two instances
const s1 = new SingletonUserStore();
const s2 = new SingletonUserStore();

// They will be the same instance because of the Singleton pattern
console.log(s1 === s2); // true
