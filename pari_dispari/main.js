// l'utente sceglie pari o dispari e inserisce un numero da 1 a 5.

// generiamo un numero random ( sempre da 1 a 5 ) per il computer (usando una funzione). 



let numeroUtente = Number(prompt('inserisci un numero da 1 a 5'));

let numeroPc = numeroCasuale()

function numeroCasuale() {
    numero = Math.round(Math.random() * 5);
    return numero
}

// sommiamo i due numeri 


let sommaNumeri = numeroUtente + numeroPc
console.log(sommaNumeri);

// stabilire con una funzione se la somma dei due numeri è pari o dispari

let utenteSceglie = prompt('scegli pari o dispari')

const check = sommaDeiNumeri();

console.log(check);
function sommaDeiNumeri() {
    console.log(sommaNumeri);
    if (sommaNumeri % 2 == 0 && utenteSceglie == 'pari') {
        return 'Numero pari , hai vinto!'
    } else if (sommaNumeri % 2 != 0 && utenteSceglie == 'dispari') {
        return 'dispari, hai vinto'
    } else {
        return 'hai perso!'
    }

}

// stabiliamo chi ha vinto

/* if (utenteSceglie = sommaDeiNumeri) {
    console.log('hai vinto');

} else {
    console.log('hai perso');
}
 */
