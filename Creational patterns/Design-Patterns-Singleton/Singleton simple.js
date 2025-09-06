const Singleton = (function(){
    let instance;  // Declare a variable to hold the singleton instance.
    return{
        getInstance: function(){
            // If there's no instance yet, create one with a random id.
            if(!instance) instance = {id:Math.random()};
            return instance;  // Return the existing instance.
        }
    };
})();