/*
  Conta il tempo
  Scrivi un programma che prenda in input un numero di secondi e calcoli la quantità di ore, minuti e secondi corrispondenti, poi stampa il risultato. L'output avrà solo numeri interi.
  Esempio
    Input: 12560
    Output: 3 ore, 29 minuti e 20 secondi.
  http://www.imparareaprogrammare.it
*/
var time = 0;
var total = 12560;

var RounOre = Math.floor(total/60/60);
var minute = Math.floor((total-(RounOre*60*60))/60);
var minute2 = (total-(RounOre*60*60))/60;
var seconds = Math.round((minute2-minute)*60);

/*console.log(RounOre);
console.log(minute);
console.log(seconds);*/

document.write(`<br>Sono le ore ${RounOre}, ${minute} minuti e ${seconds} secondi`);
