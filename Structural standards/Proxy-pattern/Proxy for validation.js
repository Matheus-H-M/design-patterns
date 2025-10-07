// Define an object representing a product with a name and price
const product = {
    name: "tv",
    price: 1500
};

// Create a Proxy called 'validator' that wraps around the 'product' object
// The Proxy intercepts and customizes operations performed on the object
const validator = new Proxy(product, {

    // The 'set' trap is triggered whenever a property is set on the object
    set(target, key, value) {

        // Check if the property being set is "price" and if the value is less than 0
        if (key === "price" && value < 0) {
            // If the price is negative, throw an error
            throw "Invalid price";
        }

        // If the validation passes, set the new value on the target object
        target[key] = value;

        // Return true to indicate that the assignment was successful
        return true;
    }
});

// Set a new price on the validator proxy
// This will trigger the 'set' trap and validate the price before setting it
validator.price = 2000;
