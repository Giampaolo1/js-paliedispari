// Crea una funzione per capire se la parola è palindroma

// chiedo di inserire una parola

var parola = "rossi";

// inserisco la parola in un array
var array = [];

for (var i = 0; i < parola.length; i++) {
  array.push (parola[i]);
}
console.log(array);


// inverto la parola e la metto in un altro array

var arrayVuoto = [];

for (var i = parola.length; i >= 0 ; i--) {
 arrayVuoto.push (parola[i]);

// if (arrayVuoto==array) {
//   console.log("Palindroma");
// } else {
//   console.log("Non Palindroma");
// }

}

console.log(arrayVuoto);
