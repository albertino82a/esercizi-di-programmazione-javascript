/*
  Tanti numeri
  Scrivi un programma che dato un insieme di valori in un array, calcolai la media dei valori e restituisca in output tutti i valori minori della media.
  Stampa anche quanti sono i valori monori della media e quanti quelli maggiori.
  http://www.imparareaprogrammare.it
*/
var values = [6,7,8,9,10,34,456,23,345,534,2,342,3,4,45,35];
var total = values.reduce((previous, current) => current += previous);
var avg = total / values.length;
var lower = 0;
var greater = 0;

console.log(avg);
console.log(values);


for(var i = 0; i < values.length; ++i){
if (values[i] < avg) {
  lower++;
}
else if (values[i] > avg) {
  greater++;
}
}

  console.log(lower, greater);
