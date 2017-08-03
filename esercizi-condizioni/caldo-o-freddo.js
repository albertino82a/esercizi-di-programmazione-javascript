/*
  Caldo o freddo
  Scrivi un programma che prenda in input sette valori relativi alle temperature della settimana e stabilisca la giornata più calda e quella più fredda.
  http://www.imparareaprogrammare.it
*/


var dayOfWeek = [53,52,35,33,23,56,33];

var warm = Math.max.apply(Math, dayOfWeek);
if (warm === dayOfWeek[0] )
console.log(warm + ' Monday')
else if (warm === dayOfWeek[1])
console.log(warm + " Tuesday")
else if (warm === dayOfWeek[2])
console.log(warm + " Wednesday")
else if (warm === dayOfWeek[3])
console.log(warm + " Thursday")
else if (warm === dayOfWeek[4])
console.log(warm + " Friday")
else if (warm === dayOfWeek[5])
console.log(warm + " Saturday")
else if (warm === dayOfWeek[6])
console.log(warm + " Sanday")

var cool = Math.min.apply(Math, dayOfWeek);
if (cool === dayOfWeek[0] )
console.log(cool + ' Monday')
else if (warm === dayOfWeek[1])
console.log(cool + " Tuesday")
else if (cool === dayOfWeek[2])
console.log(cool + " Wednesday")
else if (cool === dayOfWeek[3])
console.log(cool + " Thursday")
else if (cool === dayOfWeek[4])
console.log(cool + " Friday")
else if (cool === dayOfWeek[5])
console.log(cool + " Saturday")
else if (cool === dayOfWeek[6])
console.log(cool + " Sanday")
