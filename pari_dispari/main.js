// l'utente sceglie pari o dispari e inserisce un numero da 1 a 5.

// generiamo un numero random ( sempre da 1 a 5 ) per il computer (usando una funzione). 

// sommiamo i due numeri 

// stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)

// stabiliamo chi ha vinto

let numeroUtente = Number(prompt('inserisci un numero da 1 a 5'));

function numeroCasuale(numeroComputer) {
    numero = Math.round(Math.random() * 5);
    return numeroComputer[numero]
}

let sommaNumeri = numeroUtente + numero
console.log(sommaNumeri);


