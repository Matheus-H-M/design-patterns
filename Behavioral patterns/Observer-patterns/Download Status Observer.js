// Define a class called DownloadStatus
class DownloadStatus {
    // Method that receives a status update
    update(status) {
        // Log the current status to the console
        console.log("Status:", status);
    }
}

// Create a new Subject instance (assuming Subject is defined elsewhere)
const download = new Subject();

// Subscribe a new DownloadStatus instance to the Subject
download.subscribe(new DownloadStatus());

// Notify subscribers with a status message
download.notify("Downloading... 75%");
