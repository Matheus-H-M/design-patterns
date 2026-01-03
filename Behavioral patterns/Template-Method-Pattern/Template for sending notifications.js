// Base notification class
class Notificacao {

    // Template method that defines the notification flow
    enviarNotificacao() {
        this.prepararMensagem(); // Prepares the message content
        this.enviar();           // Sends the notification
        this.log();              // Logs the notification status
    }

    // Method to prepare the message (to be overridden by subclasses)
    prepararMensagem() {}

    // Method to send the notification (to be overridden by subclasses)
    enviar() {}

    // Common logging method used by all notifications
    log() {
        console.log("Notification sent");
    }
}

// Email notification class that extends the base notification
class NotificacaoEmail extends Notificacao {

    // Formats the message specifically for email
    prepararMensagem() {
        console.log("Message formatted for email");
    }

    // Sends the email
    enviar() {
        console.log("Email sent");
    }
}

// Creates an Email notification and sends it
new NotificacaoEmail().enviarNotificacao();
