// Crea una funzione per capire se la parola è palindroma

// chiedo di inserire una parola

var parola = prompt("Inserisci una parola");

// eseguo funzione

palindroma (parola);
// palindroma ("stringa");
// palindromabianchi ();
// palindromabianchi ();


// funzione:

function palindroma (parolainput) {
  // inserisco la parola in un array
  // var array = [];
  //
  // for (var i = 0; i < parolainput.length; i++) {
  //   array.push (parolainput[i]);
  // }
  // console.log(array);


  // inverto la parola e la metto in un altro array

  // var arrayVuoto = [];

  var revertata = "";

  for (var i = parolainput.length -1; i >= 0 ; i--) {

    revertata = revertata + parolainput[i];



   // arrayVuoto.push (parolainput[i]);




  // if (arrayVuoto==array) {
  //   console.log("Palindroma");
  // } else {
  //   console.log("Non Palindroma");
  // }

  }

  console.log("la parola revertata è: " + revertata);
  // console.log(arrayVuoto);

  // if (array == arrayVuoto) {
  //   console.log("Palindroma!");
  // } else {
  //   console.log("non palindroma");
  // }

  if (parola == revertata) {
    console.log("Palindroma");
  } else {
    console.log("Non Palindroma");
  }
}








// funzione2:

function palindromabianchi () {
  var stringafissa = "bianchi";
  // inserisco la parola in un array
  var array = [];

  for (var i = 0; i < stringafissa.length; i++) {
    array.push (stringafissa[i]);
  }
  console.log(array);


  // inverto la parola e la metto in un altro array

  var arrayVuoto = [];

  for (var i = stringafissa.length -1; i >= 0 ; i--) {
   arrayVuoto.push (stringafissa[i]);

  // if (arrayVuoto==array) {
  //   console.log("Palindroma");
  // } else {
  //   console.log("Non Palindroma");
  // }
  }
  console.log(arrayVuoto);
}
