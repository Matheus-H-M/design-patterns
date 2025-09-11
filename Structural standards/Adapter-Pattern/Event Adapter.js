// Function to add a click event listener using the old method (for older browsers)
function addClickListenerOld(element, callback) {
    // Assign the callback function directly to the onclick property of the element
    element.onclick = callback;
}

// Function to add a click event listener using the modern method
function addClickListenerNew(element, callback) {
    // Use the standard addEventListener method to attach the callback to the "click" event
    element.addEventListener("click", callback);
}

// Function that decides which click listener method to use based on browser support
function clickAdapter(element, callback) {
    // Check if the element does NOT support the addEventListener method
    if (!element.addEventListener)
        // If addEventListener is not supported, use the "new" method (this line has a logic error, explained below)
        addClickListenerNew(element, callback);
    else
        // Otherwise, use the old method
        addClickListenerOld(element, callback);
}
