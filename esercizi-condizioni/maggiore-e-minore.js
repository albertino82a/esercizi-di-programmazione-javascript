/*
  Maggiore e minore
  Scrivi un programma che prenda quattro numeri in input, stampi in output il maggiore e il minore.
  http://www.imparareaprogrammare.it
*/
var a = prompt('Scrivi un numero');
var b = prompt('Scrivi un altro numero');
var c = prompt('Scrivi un altro numero');
var d = prompt('Scrivi un altro numero');

var x = parseInt(a);
var y = parseInt(b);
var z = parseInt(c);
var j = parseInt(d);

var num = [x,y,z,j];
var max = Math.max(...num);
var min = Math.min(...num);

console.log('The biggest value of the 4 entered numbers is ' + max +
 ' while the lower one is ' + min);
