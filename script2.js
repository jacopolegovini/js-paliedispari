// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random(sempre da 1 a 5) per il computer(usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari(usando una funzione)
// Dichiariamo chi ha vinto.


// Recupera elementi dal DOM
// Crea le variabili
// Crea la funzione per generare un numero casuale
//     Adopera la formula random 
// Crea la funzione per stabilire se la somma dei due numeri sia pari o dispari
//     Aggiungi la somma come parametro della funzione
//     Con la somma usa l'operatore modulo
// Aggiungi evento ai bottoni pari e dispari
// Inserisci le funzioni
// Dichiara il vincitore


// Recupera elementi dal DOM
const evenElement = document.getElementById('even');
const oddElement = document.getElementById('odd');
const numberElement = document.getElementById('number');
const buttonWinnerElement = document.getElementById('winner');
const resultElement = document.querySelector('p');

// Crea le variabili
let sum = 0;

// Crea la funzione per generare un numero casuale
function getRandomNumber () {
    let randomNumber = Math.floor((Math.random() * 5) + 1);
    return randomNumber;
}


// Crea la funzione per stabilire se la somma dei due numeri sia pari o dispari
function isOdd(sum) {
    let sumType = false
    if (sum % 2 === 0) {
        sumType = true;
        return sumType;
    } else {
        return sumType;
    }
}


// Aggiungi evento ai bottoni pari e dispari
evenElement.addEventListener('click', function(event) {
    event.preventDefault();
    
    // Dichiaro variabili
    let outcome = '';

    // Richiamo funzione random
    let randomNumber = getRandomNumber();
    
    // Ottengo numero utente
    let userNumber = parseInt(numberElement.value);

    // Eseguo la somma
    sum = randomNumber + userNumber;
    
    // Richiamo la funzione isOdd
    let odd = isOdd(sum);

    // Condizione a seconda del risultato
    if (odd) {
        outcome = 'Hai vinto';
    } else {
        outcome = 'Hai perso';
    }

    // Stampo il risultato
    resultElement.innerHTML = `La somma è ${sum}.<br>${outcome}!`
})

oddElement.addEventListener('click', function(event) {
    event.preventDefault();

        // Dichiaro variabili
        let outcome = '';

        // Richiamo funzione random
        let randomNumber = getRandomNumber();
        
        // Ottengo numero utente
        let userNumber = parseInt(numberElement.value);
    
        // Eseguo la somma
        sum = randomNumber + userNumber;
        
        // Richiamo la funzione isOdd
        let odd = isOdd(sum);
    
        // Condizione a seconda del risultato
        if (!odd) {
            outcome = 'Hai vinto';
        } else {
            outcome = 'Hai perso';
        }
    
        // Stampo il risultato
        resultElement.innerHTML = `La somma è ${sum}.<br>${outcome}!`
})

