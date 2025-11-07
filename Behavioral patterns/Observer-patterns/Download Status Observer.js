// Define a class called DownloadStatus
// This class will be used as an "observer" to receive updates about download status.
class DownloadStatus {
    // The update method is called whenever a new status is notified.
    update(status) {
        console.log("Status:", status); // Print the current status to the console.
    }
}

// Create a new Subject instance.
// A Subject usually manages a list of observers (subscribers) and notifies them of updates.
const download = new Subject();

// Subscribe a new DownloadStatus instance to the Subject.
// This means that whenever 'download.notify()' is called,
// the 'update()' method of this instance will run.
download.subscribe(new DownloadStatus());

// Notify all subscribers with the message "Baixando... 75%" (means "Downloading... 75%").
// This will trigger the update() method of each subscriber.
download.notify("Baixando... 75%");
