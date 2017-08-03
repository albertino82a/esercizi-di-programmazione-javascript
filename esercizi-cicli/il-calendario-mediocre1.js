/*
  Il calendario mediocre
  Scrivi un programma che stampi il calendario di un mese, ricevi in input:
    - Il numero di giorni nel mese
    - Il giorno della settimana in cui questo comincia (0: lunedì ... 6: domenica)

  Variante
  Piuttosto che passarein input i giorni del mese passa direttamente il mese e calcola tu i giorni corrispondenti.
  http://www.imparareaprogrammare.it
*/


var days = 28;
var inizio = 4;
var giorno;
var month = 'February';


for (var i =1; i < days + 1; i++){
/*
console.log( i, inizio);*/


inizio ++;
if (inizio > 6)
inizio = 0;



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
 console.log(month + ' ',  i , giorno);

}
