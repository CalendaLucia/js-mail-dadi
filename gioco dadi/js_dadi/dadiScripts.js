// Generare un numero random da 1 a 6 sia per il giocatore sia per il computer

const userNumber = Math.round(Math.random()*6);
console.log(userNumber + "numero user"  )

const pcNumber = Math.round(Math.random()*6);
console.log(pcNumber + "numero pc" )

// Stabilire il vincitore, in base a chi fa il punteggio più alto.
    
    if ( userNumber > pcNumber) {
        
        console.log( "Sei il Vincitore!!" )

    } else if (userNumber < pcNumber ) {

         console.log("Hai perso!!")

    } else {

          console.log("Pareggio!!")

    }

    



