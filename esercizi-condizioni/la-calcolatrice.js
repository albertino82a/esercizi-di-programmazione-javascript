/*
  La calcolatrice
  Scrivi un programma che prenda tre input:
    - Due numeri
    - Una stringha che identifichi l'operazione da eseguire, es: "somma"
  Le operazioni supportate sono le suguenti:
    somma => +
    sottrazione => -
    moltiplicazione => *
    divisione => /
    modulo (solo tra interi) => %
    potenza => ^
    media => m
  Utilizza il costrutto Switch-Case mediante acquisizione di caratteri.
  http://www.imparareaprogrammare.it
*/

var x = prompt('Scrivi un numero');
var y = prompt('Scrivi un altro numero');

var num1 = parseInt(x);
var num2 = parseInt(y);

var operator = prompt('Scrivi uno dei seguenti operatori: + - * / % se si vule scoprire se il numero sia intero, ^ se si vuole elevare il primo numero alla potenza del secondo, oppure  m per la media dei due numeri');
var result;
switch (true) {
  case operator == '+':
  result = alert('La somma dei due numeri: ' + Math.abs(num1 + num2));
    break;
    case operator == '-':
    result = alert('La sottrazione dei due numeri: ' + Math.abs(num1 - num2));
      break;
      case operator == '*':
      result = alert('La moltiplicazione dei due numeri: ' + Math.abs(num1 * num2));
        break;
        case operator == '/':
        result = alert('La divisione dei due numeri: ' + Math.abs(num1 / num2));
          break;
          case operator == '%':
          if ((num1 % num2) == 0) {
          result = alert('I due numeri sono interi: il resto del dividendo risulta' + Math.abs(num1 % num2));}
          else {
            alert('wrong choice');
          }
            break;
            case operator == '^':
            result = alert('La potenza dei due numeri: ' + Math.pow(num1, num2));
              break;
              case operator == 'm':
              result = alert('La somma dei due numeri: ' + Math.abs(num1 + num2)/ 2);
                break;

  default:
  alert('su dai, scegline uno che sia uguale a quelli elencati!')

}
console.log(result);
