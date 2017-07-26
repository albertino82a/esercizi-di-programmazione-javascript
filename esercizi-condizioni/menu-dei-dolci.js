/*
  Menu dei dolci
  Scrivi un programma stampi il seguente menu:
    MENU:
    1. Tiramisù
    2. Torta della nonna
    3. Cheesecake alla nutella
    4. Macedonia
  Inoltre, prenda in input il valore numerico della scelta.
  Se la scelta non è tra quelle elencate verrà stampata la scritta 'Dolce non disponibile' altrimenti verrà visualizzata la scelta effettuata 'Hai scelto il dolce X'.
  http://www.imparareaprogrammare.it
*/


var menu = [];
menu[0] = [ '1', 'Tiramis&ugrave;'];
menu[1] = [ '2', 'Torta della nonna'];
menu[2] = [ '3', 'Cheesecake alla nutella'];
menu[3] = [ '4', 'Macedonia'];


menu.toString();

var a = prompt( 'Scegli il dolce che preferisci tra '  +  ' \nn 1' + menu[0][1] + ' \nn 2 ' + menu[1][1] + ' \nn 3 ' + menu[2][1] + ' \nn 4  ' + menu[3][1] );
if (a == 1) {
  console.log('Buona scielta il Tiramis&ugrave;');
} else if (a == 2) {
  console.log('Buona scielta la Torta della nonna');
} else if (a == 3) {
  console.log('Buona scielta il Cheesecake alla nutella');
} else if (a == 4) {
  console.log('Buona scielta la Macedonia');
} else
console.log('dolce non disponibile');
