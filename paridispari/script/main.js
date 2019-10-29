// L’utente sceglie pari o dispari
// e un numero da 1 a 5.
// Generiamo un numero random (sempre da 1
// a 5) per il computer.
// Sommiamo i due numeri e dichiariamo chi ha
// vinto.

// L’utente sceglie pari o dispari

var padispUtente = prompt ("pari o dispari")
console.log(padispUtente);

// e un numero da 1 a 5.
var numUtente = parseInt(prompt("da 1 a 5"))
console.log(numUtente);

// Generiamo un numero random (sempre da 1
// a 5) per il computer.

// invoca la funzione e dagli min 1 e max 5
var numPC = numRandom (1,5)

// invoca la fx pariDisp
var vittoria = pariDisp (numUtente, numPC)

console.log(numPC);

// crea la funzione per il numero numRandom

function numRandom (min, max) {
  return Math.floor(Math.random()*(max-min+1)) + min;
}

// crea la funzione per pari e dispari

function pariDisp (num1,num2){
  var somma = num1 + num2;
  if (somma % 2 == 0) {
    return "pari";
  } else {
    return "dispari"
  }
}

// output finale


console.log("Vince il " + vittoria);
