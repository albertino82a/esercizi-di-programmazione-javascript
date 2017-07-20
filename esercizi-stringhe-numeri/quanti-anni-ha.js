/*
  Quanti anni ha?
  Scrivi un programma che prenda in input un anno di nascita e determini l'età della persona,
  calcola anche quanti anni sono necessari per raggiungere i 100. Stampa in output entrambi i risultati.
  http://www.imparareaprogrammare.it
*/
var bornYear = 1982;
var today = 2017;

var age = today-bornYear;
var yearToCent = bornYear+100-today;

document.write(`<br> Tom jackass is ${age} years old and in ${yearToCent} years he will celebrate the Century's birthday`);
