/*
  Rincorri la decina
  Scrivi un programma che che stampi i numeri da 1 a 100 andando a capo ogni 10.
  Hint: per andare a capo stampa '\n'.
  http://www.imparareaprogrammare.it
*/

/*
// stampare nell apagina tramite write

document.write("<h1>Rincorri la decina</h1>");

for (var i = 1; i < 101; i++) {
    document.write(i + " ");

  if (i % 10==0) {
    document.write("<br/><br>");
  }
}
*/


//stampare nel log
var numero = " ";

for (var i = 1; i < 101; i++) {
numero += i + '';

  if (i % 10==0) {
    numero += '\n';

  }
}
console.log(numero);
