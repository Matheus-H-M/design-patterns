// Class representing a Mac-style button
class MacButton {
    render() {
        console.log("Mac style button");
    }
}

// Class representing a Windows-style button
class WinButton {
    render() {
        console.log("Windows style button");
    }
}

// Factory function that creates a button based on the operating system
function ButtonFactory(os) {
    // If the OS is "mac", return a MacButton instance; otherwise, return a WinButton
    return os === "mac" ? new MacButton() : new WinButton();
}

// Create a button for Mac
const btn = ButtonFactory("mac");

// Render the button (prints: "Mac style button")
btn.render();
