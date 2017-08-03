/*
  Azzecca e azzera
  Scrivi un programma che dichiari un array di 100 elementi interi e lo riempia con numeri casuali da 1 a 50.
  Permetti all'utente di inserire una serie di numeri e azzera tutti i numeri nell'array principale che contengono un multiplo del numero inserito.
  Il programma termina quando tutti gli elementi dell'array principale sono uguali a zero.
  Hint: Per generare un numero casuale utlizza la funzione javascript random, che restituisce un intervallo compreso tra 0 e 1 che necessita di essere convertito per il tuo intervallo.
  http://www.imparareaprogrammare.it
*/
var randomNumber = [];
var result;
var j = 0;
randomNumber.length = 100;

for (var i = 0; i < randomNumber.length; i++) {
  randomNumber[i] = Math.floor(Math.random() * (50)) + 1;


}

var userInput = prompt('Give me a number in between 1 to 50');
var filtered = randomNumber.filter(function caughtNumbers (number) {
return number % userInput !== 0;


do {
filtered = number;
  if (filtered === 0) {
    document.write('Finally');
  }
} while (filtered !== 0);

});





document.write('Numeri random' + ' <br> ' + randomNumber + ' <br>');
document.write('filtrati <br>' + filtered);
console.log(filtered);
console.log(j);
