// Deep clone function: creates a deep copy of an object using JSON methods
function cloneDeep(obj){
   return JSON.parse(JSON.stringify(obj));
}

// Original object with nested structure
const original = { user: 'joão', config: { dark: true } };

// Clone the original object deeply
const clone = cloneDeep(original);

// Modify the 'dark' property in the cloned object
clone.config.dark = false;

// Log the original object's 'dark' property to show it's unaffected by the change in the clone
console.log(original.config.dark); // Output: true