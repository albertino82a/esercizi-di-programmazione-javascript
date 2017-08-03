/*
  Vinci tu!
  Scrivi un programma che simula un gioco di dadi tra due utenti, prendi in input il numero di quanti tiri effettuare per ciascun giocatore (N), dopodiché ogni utente tira N volte un dado a sei facce.
  Stampa il vincitore che ha totalizza più punti.
  http://www.imparareaprogrammare.it
*/
var n = 4;
var user1 = 0;
var user2 = 0;
var a = 0;
var b = 0;
var c = 0;


  for (i = 0;i < n; i++){

b = Math.floor(Math.random() * (6) ) +1;
user1 += b;
c = Math.floor(Math.random() * (6) ) +1;
user2 += c;



if (user1 < user2) {
  a = ' user 2 is the winner ';
} if (user1 > user2) {
a =' user 1 is the winner ';
} if (user1 == user2) {
a = ' drow ';
}



}
document.write(a, user1 + ' ', user2);
