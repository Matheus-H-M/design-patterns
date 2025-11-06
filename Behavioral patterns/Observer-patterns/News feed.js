// Define a class called "Usuario" (which means "User" in Portuguese)
class Usuario {
    // The constructor is called when creating a new instance of Usuario
    constructor(nome){
        // Save the user's name in the instance
        this.nome = nome;
    }

    // The "update" method will be called when a new notification (news) is sent
    update(noticia){
        // Print to the console which user read which news
        console.log(`${this.nome} read: ${noticia}`);
    }
}

// Create a new Subject (not defined in this snippet,
// but it's usually a class that manages subscribers in the Observer pattern)
const feed = new Subject();

// Subscribe new users (observers) to the feed
feed.subscribe(new Usuario("João"));
feed.subscribe(new Usuario("Clara"));

// Notify all subscribed users with a new message
feed.notify("New headline published!");