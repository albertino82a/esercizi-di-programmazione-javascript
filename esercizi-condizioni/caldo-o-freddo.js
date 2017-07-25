/*
  Caldo o freddo
  Scrivi un programma che prenda in input sette valori relativi alle temperature della settimana e stabilisca la giornata più calda e quella più fredda.
  http://www.imparareaprogrammare.it
*/
/*
var lunedi = 30;
var martedi = 28;
var mercoledi = 33;
var giovedi = 26;
var venerdi = 25;
var sabato = 25;
var domenica = 33;

var cooler = Math.min(lunedi,martedi,mercoledi,giovedi,sabato,domenica);
var warmer = Math.max(lunedi,martedi,mercoledi,giovedi,sabato,domenica);
console.log('The cooler day of last week was ' + cooler + ' degrees. While the warmer day of last week was ' + warmer );
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
/*

  if ( lunedi >= martedi && lunedi >=  mercoledi && lunedi >=  giovedi && lunedi >=  venerdi && lunedi >=  sabato && lunedi >=  domenica)
    console.log("The warmer day was Monday with "  + lunedi  + " degrees");

   else if ( martedi >= lunedi && martedi >= mercoledi && martedi >= giovedi && martedi >= venerdi && martedi >= sabato && martedi >= domenica)
    console.log("The warmer day was Tuesday with "  + martedi + " degrees");

   else if ( mercoledi >= lunedi && mercoledi >=  martedi && mercoledi >=  giovedi && mercoledi >=  venerdi && mercoledi >=  sabato && mercoledi >=  domenica)
    console.log("The warmer day was Wednesday with "  + mercoledi + " degrees");

   else if ( giovedi >= lunedi && giovedi >=  martedi && giovedi >=  mercoledi && giovedi >=  venerdi && giovedi >=  sabato && giovedi >=  domenica)
    console.log("The warmer day was Thursday with "  + giovedi + " degrees");

   else if ( venedri >= martedi && venedri >=  lunedi && venedri >=  giovedi && venedri >=  mercoledi && venedri >=  sabato && venedri >=  domenica)
    console.log("The warmer day was Friday with "  + venerdi + " degrees");

   else if ( sabato >= lunedi && sabato >=  mercoledi && sabato >=  giovedi && sabato >=  venerdi && sabato >=  martedi && sabato >=  domenica)
    console.log("The warmer day was Saturday with "  + sabato + " degrees");

   else if ( domenica >= martedi && domenica >=  lunedi && domenica >=  giovedi && domenica >=  venerdi && domenica >=  sabato && domenica >=  martedi)
    console.log("The warmer day was Sunday with "  + domenica + " degrees");



  if ( lunedi < martedi && mercoledi && giovedi && venerdi && sabato && domenica) {
    console.log("The colder day was Monday with "  + lunedi  + " degrees");
  } else if (  martedi < lunedi && mercoledi && giovedi && venerdi && sabato && domenica) {
    console.log("The colder day was Tuesday with "  + martedi + " degrees");
  } else if (  mercoledi < martedi && lunedi && giovedi && venerdi && sabato && domenica) {
    console.log("The colder day was Wednesday with "  + mercoledi + " degrees");
  } else if (  giovedi < lunedi && mercoledi && martedi && venerdi && sabato && domenica) {
    console.log("The colder day was Thursday with "  + giovedi + " degrees");
  } else if (  venerdi < martedi && lunedi && giovedi && mercoledi && sabato && domenica) {
    console.log("The colder day was Friday with "  + venerdi + " degrees");
  } else if (  sabato < lunedi && mercoledi && giovedi && venerdi && martedi && domenica) {
    console.log("The colder day was Saturday with "  + sabato + " degrees");
  } else if (  domenica < martedi && lunedi && giovedi && venerdi && sabato && mercoledi) {
    console.log("The colder day was Sunday with "  + domenica + " degrees");
  } */
