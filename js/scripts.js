// Chiedi all'utente la sua email
const request = prompt("Inserisci la tua email");

// controlla che sia nella lista di chi può accedere.
// Quindi invento una lista di email autorizzate.

const emailList = [ "mariorossi2@gmail.com", "martaamet40@gmail.com", "giuliocesare3@gmail.com", "massimotroisi55@gmail.com" ]

// effettuo il controllo degli input 

for (let i = 0; i < emailList.length; i++) {

    if ( request  == emailList[i] ) {
   
        console.log("Login effettuato"  )
       
    
    
        // stampa un messaggio appropriato sull'esito del controllo
        
    } else   {
    
        console.log("Mi dispiace, ma non hai l' autorizzazione per entrare")
         // stampa un messaggio appropriato sull'esito del controllo
    }
    
    
    
}

