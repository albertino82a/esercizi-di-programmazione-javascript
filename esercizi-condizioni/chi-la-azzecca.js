/*
  Chi l'azzecca?
  Scrivi un programma che generi un numero casuale compreso tra 1 e 100 (zero escluso).
  Successivamente prendi in input altri due numeri di due ipotetici utenti, e comunica se uno dei due ha azzeccato il numero casuale, in caso contrario quale dei due si è avvicinato di più al numero.
  Hint: Per generare un numero casuale utlizza la funzione javascript random, che restituisce un intervallo compreso tra 0 e 1 che necessita di essere convertito per il tuo intervallo.
  http://www.imparareaprogrammare.it
*/

var randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);
document.write(randomNumber);

var user1 = prompt('Dear user 1 give me a number between 1 to 100');
var user2 = prompt('Dear user2 give me a number between 1 to 100');

if (user1 == randomNumber)
alert("Good job mate 1, you got the right number")
else if (user2 == randomNumber)
alert("Good job mate 2, you got the right number")
else if (Math.abs(user1 - randomNumber) < Math.abs(user2 - randomNumber))
alert("Mr User1 you're closer")
else if (Math.abs(user2 - randomNumber) < Math.abs(user1- randomNumber))
alert("Mr User2 you're closer")
else alert('Between 1 and 100, come on!!')
