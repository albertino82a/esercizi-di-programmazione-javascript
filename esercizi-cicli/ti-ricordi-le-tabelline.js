/*
  Ti ricordi le tabelline?
  Scrivi un programma che stampi che prenda in input un numero e stampi la tabellina corrispondente.
  http://www.imparareaprogrammare.it
*/
var numero = prompt('Give me a number and I will give back the multiplication table');
var tabellina = 0;
var maxTable;
maxTable = numero * 10;
var x = Number(numero);

document.write('Multiplication table of ' + x + '<br>')

while (tabellina < maxTable) {
  tabellina += x;
document.write(tabellina + '<br>');
}
