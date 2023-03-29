/*ЗАДНИЕ 6
Дан массив. 
Проверить, одинаковые ли элементы в массиве и вывести результат true или false в консоль. 
Речь идёт не о двух рядом стоящих одинаковых элементах, а обо всех. 
Проверить, все ли элементы в массиве одинаковые.*/

const arr = [2, 2, 2, 2, 2];
let equalЕlements = true;
for (let i = 0; i < arr.length - 1; i++) {
  if (arr[i] !== arr[i + 1]) {
    equalЕlements = false;
      }
    }
console.log(equalЕlements)