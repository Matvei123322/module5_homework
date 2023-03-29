/* ЗАДНИЕ 3
Дана строка. Необходимо вывести в консоль перевёрнутый вариант. Например, "Hello" -> "olleH".*/

const WORD = "hello";
const REVERSE = WORD.split('').reverse().join('');
console.log(REVERSE);