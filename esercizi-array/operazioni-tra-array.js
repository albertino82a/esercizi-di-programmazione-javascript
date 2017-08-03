/*
  Operazioni tra array
  Scrivi un programma che dichiari 2 array di 10 elementi interi e li riempia con numeri casuali da 1 a 10.
  Il programma prende in input dall'utente il tipo di operazione aritmetica da effettuare, una delle seguenti:
    addizione
    sottrazione
    moltiplicazione
    divisione
  Ed esegue il calcolo tra ogni elemento dei due array salvando ciascun risultato in un terzo array di appoggio.
  Hint: Per generare un numero casuale utlizza la funzione javascript random, che restituisce un intervallo compreso tra 0 e 1 che necessita di essere convertito per il tuo intervallo.
  http://www.imparareaprogrammare.it
*/
var user1 = [];
var user2 = [];
var result;

user1.length = 10;
user2.length = 10;

for (var i = 0; i < user1.length; i++) {
  user1[i] = Math.floor(Math.random() * (10)) + 1;
  user2[i] = Math.floor(Math.random() * (10)) + 1;
}
Number(user1[i]);
Number(user2[i]);
//var input = prompt("Aritmetic sign");

for(var j = 0; j < user1.length; j++){
  result += (user1[i] + user2[i]);
}
console.log(user1);
console.log(user2);
console.log(result);
