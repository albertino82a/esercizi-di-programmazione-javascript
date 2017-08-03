/*
  Il calendario mediocre
  Scrivi un programma che stampi il calendario di un mese, ricevi in input:
    - Il numero di giorni nel mese
    - Il giorno della settimana in cui questo comincia (0: lunedì ... 6: domenica)

  Variante
  Piuttosto che passarein input i giorni del mese passa direttamente il mese e calcola tu i giorni corrispondenti.
  http://www.imparareaprogrammare.it
*/
//Fist attempt with wrong result
var month = prompt("write a month",'February');
var week = ['Monday','Tuesday','Wednesday','Thoursday', 'Friday', 'Saturday', 'Sunday'];

var days;

switch (month) {
  case 'January':
  days = (31);
  week = week[6];
  break;
  case 'March':
  days = (31);
  week = week[2];
  break;
  case 'May':
  days = (31);
  week = week[0];
  break;
  case 'July':
  days = (31);
  week = week[5];
  break;
  case 'August':
  days = (31);
  week = week[1];
  break;
  case 'October':
  days = (31);
  week = week[6];
  break;
  case 'December':
  days = (31);
  week = week[4];
  break;
  case 'February':
  days = (28);
  week = week[2];
  break;
  case 'April':
  days = (30);
  week = week[5];
  break;
  case 'June':
  days = (30);
  week = week[3];
  break;
  case 'September':
  days = (30);
  week = week[4];
  break;
  case 'November':
  days = (30);
  week = week[2];
  break;
}


document.write("<h1>Days of a month</h1>");
document.write('<h2>' + month + '</h2>');

for (var i = 1; i <= days; i++ ) {
  document.write(  i + '<br>');
  }
  document.write('<br> This month starts on ' + week + '<br');


  var inizio = week;
  var giorno;

  for (var j =1; j < days + 1; j++){

  /*console.log( j, inizio);*/


  inizio ++;
  if (inizio > 6)
  inizio = 0;

inizio;

  switch (inizio) {
     case 0:
     giorno = "Monday";
     break;
     case 1:
     giorno = 'Tuesday';
     break;
     case 2:
     giorno = 'Wednesday';
     break;
     case 3:
     giorno = 'Thursday';
     break;
     case 4:
     giorno = 'Friday';
     break;
     case 5:
     giorno = "Saturday";
     break;
     case 6:
     giorno = "Sunday";
     break;
  }
   console.log(month + ' ',  j , giorno);
 }
