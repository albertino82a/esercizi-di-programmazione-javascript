/*
  Che giorno è oggi?
  Scrivi un programma che accetti in ingresso un numero intero compreso tra 1 a 7 e visualizzi il corrispondente giorno della settimana, esempio:
    1 => lunedì
    2 => martedì
    3 => mercoledì
    ...
    6 => domenica
  Utilizza il costrutto Switch-case, prevedi anche il caso in cui il valore immesso non sia valido, e stampare un messaggio di errore a tua scelta.

  Variante
  Scriverne una versione che anziché i giorni della settimana, visualizzi i nomi dei mesi.
  http://www.imparareaprogrammare.it
*/

var text;
var day = prompt("Please enter the number of the weeek for today")

switch (day) {
  case  '1':
  text = 'Today is Monday';
break;
case  '2':
  text = 'Today is Tuesday';
break;
case  '3':
  text ='Today is Wednesday';
break;
case  '4':
  text ='Today is Thursday';
break;
case  '5':
  text ='Today is Friday';
break;
case  '6':
  text ='Today is Saturday';
break;
case  '7':
  text ='Today is Sunday';
break;
default:
       text ='choice the right number';
}
alert(text);
