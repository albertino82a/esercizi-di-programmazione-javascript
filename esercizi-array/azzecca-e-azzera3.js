/*
  Azzecca e azzera
  Scrivi un programma che dichiari un array di 100 elementi interi e lo riempia con numeri casuali da 1 a 50.
  Permetti all'utente di inserire una serie di numeri e azzera tutti i numeri nell'array principale che contengono un multiplo del numero inserito.
  Il programma termina quando tutti gli elementi dell'array principale sono uguali a zero.
  Hint: Per generare un numero casuale utlizza la funzione javascript random, che restituisce un intervallo compreso tra 0 e 1 che necessita di essere convertito per il tuo intervallo.
  http://www.imparareaprogrammare.it
*/
var cartella = [];
var randomNumber;
var a,b,c,d,e;
var num = Math.floor(Math.random() * 50) + 1;
var result = true;



while(cartella.length < 50) {
  randomNumber = Math.floor(Math.random() * (100)) + 1;
  if(cartella.indexOf(randomNumber) !== -1)
    continue;
  cartella[cartella.length] = randomNumber;
}
cartella.sort(function(a,b){return a-b});
console.log( cartella, num);



  for (var i = 0; i < cartella.length; i++){
  if ((cartella[i] % num) === 0) {
 cartella[i] = 0;
}
}




console.log('Cartella previous ' + cartella);
console.log('Num 1 is ' + num);
console.log('true or false = ' + result);





a = cartella.indexOf(num);
//console.log("questo  " + cartella.find(checkNumber) + ' ');
console.log('Cartella position ' + a);
console.log('Num is ' + num);
cartella.splice(a, 1, '0');
console.log('Cartella a ' + cartella);
console.log('Cartella b ' + b);
