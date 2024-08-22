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
// Crea la funzione che le contenga entrambe
    // Dichiaro variabili
    // Stringa per da inserire al print con condizione a seconda dell'argomento
    // Richiamo funzione random
    // Ottengo numero utente
    // Convalida
    // Eseguo la somma
    // Richiamo la funzione isOdd
    // Condizione a seconda del risultato
    // Stampo il risultato
// Aggiungi evento ai bottoni pari e dispari
    


// Recupera elementi dal DOM
const evenElement = document.getElementById('even');
const oddElement = document.getElementById('odd');
const numberElement = document.getElementById('number');
const buttonWinnerElement = document.getElementById('winner');
const resultElement = document.querySelector('p');


// Crea le variabili
let sum = 0;
let outcome = '';
const max = 5
const evenChoice = true;


// Crea la funzione per generare un numero casuale
function getRandomNumber (max) {
    let randomNumber = Math.floor((Math.random() * max) + 1);
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

function getOutCome (evenChoice) {
    // Dichiara variabili
    let evenWin = '';
    let oddWin = '';
    
    // Stringa per da inserire al print con condizione a seconda dell'argomento
    if (evenChoice) {
        evenWin = 'Hai vinto';
        oddWin = 'Hai perso';
    } else {
        evenWin = 'Hai perso';
        oddWin = 'Hai vinto';
    }

    // Richiamo funzione random
    let randomNumber = getRandomNumber(max);

    // Ottengo numero utente
    let userNumber = parseInt(numberElement.value);

    // Convalida
    if (isNaN(userNumber)) {
        userNumber = 0;
    }

    // Eseguo la somma
    sum = randomNumber + userNumber;

    // Richiamo la funzione isOdd
    let odd = isOdd(sum);

    // Condizione a seconda del risultato
    outcome = odd ? evenWin : oddWin;

    // Stampo il risultato
    return `La somma è ${sum}.<br>${outcome}!`
}


// Aggiungi evento ai bottoni pari e dispari
evenElement.addEventListener('click', function(event) {
    event.preventDefault();

    resultElement.innerHTML = getOutCome(evenChoice);
})

oddElement.addEventListener('click', function(event) {
    event.preventDefault();

    resultElement.innerHTML = getOutCome();
})

