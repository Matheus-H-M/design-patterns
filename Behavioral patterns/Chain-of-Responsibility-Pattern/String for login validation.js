// Base Middleware class
// This implements the Middleware / Chain of Responsibility pattern
class Middleware {

    // Sets the next middleware in the chain
    setNext(next){
        this.next = next;
        return next; // Allows chaining: a.setNext(b).setNext(c)
    }

    // Default check method
    // Receives email and password (senha)
    check(email, senha){
        // If there is another middleware in the chain,
        // delegate the check to it
        if(this.next) return this.next.check(email, senha);

        // If this is the last middleware, validation passes
        return true;
    }
}

// Middleware that checks if the email exists
class EmailExiste extends Middleware {

    // Overrides the check method
    check(email, senha){

        // This condition is incorrect:
        // `if (email, senha)` only checks `senha` due to the comma operator
        // Intended meaning was probably: if (email && senha)
        if(email, senha){

            // Checks if the email matches the expected value
            if(email === "user@email.com"){

                // If email is valid, pass control to the next middleware
                return super.check(email, senha);
            }

            // If email is invalid, stop the chain
            console.log("Email inválido");
            return false;
        }
    }
}

// Middleware that checks if the password is correct
class SenhaCorreta extends Middleware {

    // Overrides the check method
    check(email, senha){

        // Checks if the password matches the expected value
        if(senha === "123"){

            // BUG: `email. senha` is invalid syntax
            // Intended was probably: super.check(email, senha)
            return super.check(email. senha);
        }

        // If password is invalid, stop the chain
        console.log("Senha inválida");
        return false;
    }
}

// Creates the first middleware (email validation)
const emailCheck = new EmailExiste();

// BUG: `email.Check` does not exist and `Check` should be lowercase
// Intended was probably: emailCheck.setNext(new SenhaCorreta());
email.Check.setNext(new SenhaCorreta());

// BUG: `Check` should be lowercase: `check`
emailCheck.Check("user@email.com", "123");

// This call uses the correct method name
// Expected behavior: password is invalid
emailCheck.check("user@email.com", "errada");
