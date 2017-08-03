/*
  La tombola magica
  Scrivi un programma in cui dichiari un array di di 5 elementi e vi inserisca casualmente i valori da 1 a 90 senza ripetizioni.
  Permetti all’utente di effettuare una partita scegliendo 5 numeri a suo piacimento e verifica quanti sono presenti nella array principale, restituisci un risultato del tipo:
    1 numero uguale => estratto
    2 numeri uguali => ambo
    3 numeri uguali => terno
    4 numeri uguali => quaterna
    5 numeri uguali => cinquina
  In caso di vittoria dovrà essere stampato un messaggio adeguato a tua scelta, in caso di perdina dovrà essere concesso un nuovo tentativo senza una nuova estrazione.
  Hint: Per generare un numero casuale utlizza la funzione javascript random, che restituisce un intervallo compreso tra 0 e 1 che necessita di essere convertito per il tuo intervallo.
  http://www.imparareaprogrammare.it
*/
let cartella = [];
var result;
var num = [];


  while(cartella.length < 5) {
  var  randomNumber = Math.ceil(Math.random() * 90)
  if(cartella.indexOf(randomNumber) > -1) continue;
   cartella[cartella.length] = randomNumber;
}
console.log(cartella);


var num1 = prompt('1) give me a number between 1 to 90');
  if ( num1 > 90) {
  alert('inser a good one');
   num1 = prompt('1) give me a number between 1 to 90');
}
var num2 = prompt('2)give me a number between 1 to 90');
  if ( num2 > 90 || num1 == num2) {
  alert('inser a good one');
  num2 = prompt('2) give me a number between 1 to 90');
}
var num3 = prompt('3)give me a number between 1 to 90');
  if ( num3 > 90 || num3 == num2 || num3 == num1) {
  alert('inser a good one');
  num2 = prompt('2) give me a number between 1 to 90');
  }
var num4 = prompt('4)give me a number between 1 to 90');
  if ( num4 > 90 || num4 == num1 || num4 == num2 || num4 == num3) {
  alert('inser a good one');
  num2 = prompt('2) give me a number between 1 to 90');
  }
var num5 = prompt('5)give me a number between 1 to 90');
  if ( num5 > 90 || num5 == num1 || num5 == num2 || num5 == num3 || num5 == num4) {
  alert('inser a good one');
  num5 = prompt('5) give me a number between 1 to 90');

}

num.push(Number(num1), Number(num2), Number(num3), Number(num4), Number(num5));

  function intersect(){
    var args = arguments;
    // if no array is passed then return empty array
    if(args.length == 0) return [];

    // for optimisation lets find the smallest array
    var imin = 0;
    for(var i = 1; i < args.length; i++)
      if(args[i].length < args[imin].length) imin = i;
    var smallest = Array.prototype.splice.call(args, imin, 1)[0];

    return smallest.reduce(function(cartella, e){
      for(var i = 0; i < args.length; i++)
        if(args[i].indexOf(e) == -1) return cartella;
      cartella.push(e);
      return cartella;
    }, []);
  }

  result = intersect(cartella, num);

if (result.length > 0 && result.length < 2) {
  alert('Estratto');
}
if (result.length > 1 && result.length < 3) {
  alert('Ambo');
}
if (result.length > 2 && result.length < 4) {
  alert('Terna');
}
if (result.length > 3 && result.length < 5) {
  alert('Quaterna');
}
if (result.length > 4 && result.length <= 5) {
  alert('Cinquina');
} else  {
var  num6 = prompt('No luck, try again. Give me a number between 1 to 90');
  if ( num6 > 90 || num6 == num1 || num6 == num2 || num6 == num3 || num6 == num4 || num6 == num5) {
  alert('inser a good one');
  num6 = prompt('6) give me a number between 1 to 90');
}
     num.push(Number(num6));
    intersect();
    result = intersect(cartella, num);

      if (result.length > 0 && result.length < 2) {
        alert('Estratto');
      }
        else {
          alert('Yuo lost, try again');
          document.write('<button onclick="myFunction()">Try Again!!</button>')
          function myFunction() {
    location.reload();
}
        }

}

console.log(num);
console.log(result);
