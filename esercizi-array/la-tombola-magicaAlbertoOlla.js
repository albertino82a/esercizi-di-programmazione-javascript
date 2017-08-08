/*
  La tombola magica
  Scrivi un programma che dichiari un array di 5 elementi e vi inserisca casualmente i valori da 1 a 90 senza ripetizioni.
  Permetti all’utente di effettuare una partita scegliendo 5 numeri a suo piacimento e verifica quanti sono presenti nella array principale, restituisci un risultato del tipo:
    1 numero uguale => estratto
    2 numeri uguali => ambo
    3 numeri uguali => terno
    4 numeri uguali => quaterna
    5 numeri uguali => cinquina
  In caso di vittoria dovrà essere stampato un messaggio adeguato a tua scelta, in caso di perdina dovrà essere concesso un nuovo tentativo senza una nuova estrazione.
  Hint: Per generare un numero casuale utlizza la funzione javascript random, restituisce un intervallo compreso tra 0 e 1 che necessita di essere convertito per il tuo intervallo.
  http://www.imparareaprogrammare.it
*/

var cartella = [];
var num = [1, 2, 3, 4, 5]; // Input

var result= 0, randomNumber, i;

// Inizializzo cartella
while(cartella.length < 5) {
  randomNumber = Math.floor(Math.random() * 90) + 1
  if(cartella.indexOf(randomNumber) !== -1)
    continue;
  cartella[cartella.length] = randomNumber;
  // se preferisci puoi scrivere: cartella.push(randomNumber);
}

console.log('Cartella:',cartella,'Numeri scelti:',num);

// Calcolo risultato
for (i = 0; i < num.length; i++) {
  if(cartella.indexOf(num[i]) !== -1)
    result++;
}

// Output
switch (result) {
  case 1:
    console.log('Estratto');
    break;
  case 2:
    console.log('Ambo');
    break;
  case 3:
    console.log('Terna');
    break;
  case 4:
    console.log('Quaterna');
    break;
  case 5:
    console.log('Cinquina');
    break;
  default:
    console.log('Hai perso, ma hai un altro tentativo!');
}

// Ripeto lo stesso codice (questo è un ottimo momento per usare le funzioni)
if( result == 0 ){
  num = [6, 7, 8, 9, 10]; // Input

  console.log('Cartella:',cartella,'Numeri scelti:',num);

  // Calcolo risultato
  for (i = 0; i < num.length; i++) {
    if(cartella.indexOf(num[i]) !== -1)
      result++;
  }

  // Output
  switch (result) {
    case 1:
      console.log('Estratto');
      break;
    case 2:
      console.log('Ambo');
      break;
    case 3:
      console.log('Terna');
      break;
    case 4:
      console.log('Quaterna');
      break;
    case 5:
      console.log('Cinquina');
      break;
    default:
      console.log('Hai perso!');
  }
}
