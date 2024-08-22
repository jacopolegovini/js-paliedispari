// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma


// Recupera elementi dal DOM
// Crea una flag
// Crea funzione
    // Crea array con la parola immessa
    // Controlla se la prima lettera corrisponde all'ultima e poi prosegui con le altre
    // Ritorna il risultato in booleano
// Aggiungi event.Listener per il bottone
    // Recupera il valore della parola
    // Fai partire la funzione
    // Monta tutto
    // Stampa il risultato


// Recupera elementi dal DOM
const wordElement = document.getElementById('word');
const resultElement = document.getElementById('result');
const button = document.querySelector('button');

// Crea le variabili
let word = '';

// Crea una flag
let palindrome = false


// Crea funzione
/**
 * This function verify if the value "word" is palindrome 
 * @returns boolean
 */
function isPalindrome() {
    // Crea array con la parola immessa
    const arrayWord = word.split('');
    console.log (arrayWord)
    let i = 0

    // Controlla se la prima lettera corrisponde all'ultima e poi prosegui con le altre
    while (arrayWord[i] === arrayWord[arrayWord.length - (i + 1)] && i < arrayWord.length) {
        if (i === arrayWord.length - 1) {
            palindrome = true;
        } else {
            palindrome = false;
        }
        i++;
    }

    // Ritorna il risultato in booleano
    return palindrome;
}


// Aggiungi event.Listener per il bottone
button.addEventListener('click', function(event) {
    event.preventDefault();

    // Recupera il valore della parola
    word = wordElement.value;

    // Fai partire la funzione
    isPalindrome();
    
    // Monta tutto
    let result = palindrome === true ? `La parola scritta è un palindromo` : `La parola scritta non è un palindromo`;

    // Stampa il risultato
    resultElement.innerHTML = result;
})


