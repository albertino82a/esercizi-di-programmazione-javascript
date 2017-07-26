/*
  Fai il professore
  Scrivi un programma che converte un voto numerico in un giudizio seguendo questi parametri:
    v < 18:  insufficiente
    18 < = v <21:  sufficiente
    21 < = v <24:  buono
    24 < = v <27:  distinto
    27 < = v <29:  ottimo
    v = 30:  eccellente
  Utilizza costrutto If.

  Variante
  Realizzare una versione con il costrutto Switch-Case.
  http://www.imparareaprogrammare.it
*/

var v = prompt('Dear user, please tell me what grade you\'ve got between 15 to 30');

var result;


/*if (v < 18)
console.log(" Insufficente ");
else if (v >= 18 && v < 21)
console.log(' sufficente');
else if (v >= 21 && v < 24)
console.log(' buono');
else if (v >= 24 && v < 27)
console.log(' distinto');
else if (v >= 27 && v < 29)
console.log(' ottimo');
else if (v = 30)
console.log(' eccellente');*/

switch (true) {
   case (v < 18 && v >= 15):
   result = "Insufficente";
   break;
   case v >= 18 && v < 21:
   result = 'sufficente';
   break;
   case v >= 21 && v < 24:
   result = 'buono';
   break;
   case v >= 24 && v < 27:
   result = 'distinto';
   break;
   case v >= 27 && v <= 29:
   result = 'ottimo';
   break;
   case v == 30:
   result = "Eccellente";
   break;
   default:
   alert('not a grade');
}
document.getElementById('demo').innerHTML = 'The result you\'ve got is ' + result;
 console.log(result);
