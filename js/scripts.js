// Chiedi all'utente la sua email
const request = prompt("Inserisci la tua email");

// controlla che sia nella lista di chi può accedere.
// Quindi invento una lista di email autorizzate.

const emailList = [ "mariorossi2@gmail.com", "martaamet40@gmail.com", "giuliocesare3@gmail.com", "massimotroisi55@gmail.com" ]

let userFound = false;
// effettuo il controllo degli input 

for (let i = 0; i < emailList.length; i++) {

    let validEmail = emailList[i];

    if ( request  == validEmail ) {
   
        console.log("Login effettuato" + " " + validEmail );
        alert("puoi entrare")

        userFound = true;

    
    
}
}


if (userFound == true) {             
  
    console.log("sei entrato")
    
} else {
   
    console.log("non sei entrato")
}

