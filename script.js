// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma


// Recupera elementi dal DOM
// Crea funzione
    // Crea array con la parola immessa
    // Controlla se la prima lettera corrisponde all'ultima e poi prosegui con le altre
    // Ritorna il risultato in booleano
// Aggiungi event.Listener per il bottone
// Stampa il risultato


// Recupera elementi dal DOM
const wordElement = document.getElementById('word');
const resultElement = document.getElementById('result');
const button = 


// Crea funzione
/**
 * This function verify if the value "word" is palindrome
 * @param {string} word 
 * @returns boolean
 */
function isPalindrome() {
    // Dichiara una flag
    let palindrome = false

    // Crea array con la parola immessa
    let word = 'saippuakivikauppias';
    const arrayWord = word.split('');
    console.log (arrayWord)
    let i = 0

    // Controlla se la prima lettera corrisponde all'ultima e poi prosegui con le altre
    while (arrayWord[i] === arrayWord[arrayWord.length - (i + 1)] && i < arrayWord.length) {
        if (i === arrayWord.length - 1) palindrome = true;
        i++;
    }

    // Ritorna il risultato in booleano
    return palindrome;
}

console.log(isPalindrome())

// Aggiungi event.Listener per il bottone
button

// Stampa il risultato
