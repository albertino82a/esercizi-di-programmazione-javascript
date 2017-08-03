/*
  Rombo che stampa!
  Scrivi un programma che riceva in input un numero dispari e stampi un rombo di lettere partendo dal valore, in questo modo:
    Input : 5
    Output:
            X
           XXX
          XXXXX
           XXX
            X
  Hint: per indentare puoi usare il tab con '\t'.
  http://www.imparareaprogrammare.it
*/

var output1 = " 1";
var output2 = "";
var output3 = "";

for (i = 1; i <= 3; i++) {
output2 = output2 + i;
}
for (i = 1; i <= 5; i++) {
output3 = output3 + i;
}

  console.log(' \t\t ' + output1 + '\n' + ' \t\t ' + output2 + '\n' + '\t\t' + output3 + '\n' + ' \t\t ' + output2 + '\n' + ' \t\t ' + output1);
