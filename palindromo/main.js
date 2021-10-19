// chiedere all'utente di inserire una parola

// creare una funzione per capire se la parola inserita è palindroma

// scrivo il mio prompt
/* let parola = prompt('Scrivi una parola')

// splitto la parola per ottenere un array di N elementi 
var parolaDivisa = parola.split('');
console.log(parolaDivisa);

// utilizzo reverse per invertire il mio array
var parolaDivisa = parolaDivisa.reverse();
console.log(parolaDivisa);

// utilizzo join per riunire le lettere e quindi ottenere una stringa
var parolaInvertita = parolaDivisa.join('');
console.log(parolaInvertita);

// condizione per confrontare la parola iniziale con quella invertita per verificare se è palindroma

if (parola == parolaInvertita) {
    console.log('la parola è palindroma');
} else {
    console.log('la parola non è palindroma');
} */


// posso procedere con l'inserimento di una funzione 


let parola = prompt('Scrivi una parola');

let parolaInversa = invertiParola(parola);

if (parola == parolaInversa) {
    console.log('la parola è palindroma');
} else {
    console.log('la parola non è palindroma');
}

function invertiParola(word) {
    var wordInversa = word.split('').reverse().join('');
    return wordInversa;
}