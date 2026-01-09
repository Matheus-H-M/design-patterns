// Base handler class that represents a generic regex handler
class HandlerRegex {

    // Sets the next handler in the chain
    setNext(handler){
        this.next = handler;
        return handler; // Allows chaining calls
    }

    // Default handle method
    handle(str){
        // If there is another handler in the chain,
        // pass the request to it
        if(this.next) return this.next.handle(str);
    }
}

// Handler responsible for checking if the input is an email
class HandlerEmail extends HandlerRegex {

    // Overrides the handle method
    handle(srt){
        // Tests if the string matches a basic email pattern
        if(/^\S+@\S+\.\S+$/.test(str)){
            console.log("It is an email.");
        } else {
            // If not an email, pass it to the next handler
            super.handle(str);
        }
    }
}

// Creates the first handler in the chain
const handler = new HandlerEmail();

// Sets the next handler (phone handler) in the chain
handler.setNext(new HandlerTelefone());

// Tests the chain with an email
handler.handle("teste@email.com");

// Tests the chain with a phone number
handler.handle("1234-5678");
