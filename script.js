

// урок 11


/* 1. Напиши функцию, которая принимает строку и проверяет,
 является ли она палиндромом. Если да - функция возвращает 
 true, если нет - false; */

function isPolnumandrom(str) {
  let check = '';
  for (let i = str.length -1; i >= 0; --i) {
    check += str[i];
  }
  return str == check;
}

console.log(isPolnumandrom('шабаш'));
//------------------------------------------

/* 2. Напиши функцию, которая принимает строку (предложение) 
и находит первое самое короткое слово в ней и возвращает его; */

let str = 'первое самое короткое слово';
const arranumStr = str.split(' ');
let shortestWord = arranumStr[0];
for (let i = 0; i < arranumStr.length; i++) {
  if (arranumStr[i].length < shortestWord.length) {
    shortestWord = arranumStr[i];
  }
}

console.log(shortestWord);
//-------------------------------------------

// 3. Напиши функцию, которая форматирует 
// строку с цифрами в телефонный номер. 
// Пример: createPhoneNumber(123456789) → 
// 8 (123) 456-789;

function splitNumberIntoDigits(number) {
  return number
    .toString()
    .split("");
    
}
const number = 987654321;
const n = splitNumberIntoDigits(number);
const operator = n[0] + n[1] + n[2];
const numFirstHalf = n[3] + n[4] + n[5];
const numSecondtHalf = n[6] + n[7] + n[8];
const num = ' ' + '(' + operator +')' + ' ' + numFirstHalf + "-" + numSecondtHalf; 
 
function createPhoneNumber(a, b,  operation) {
  return operation(a, b); 
}
const result = (a, b) => a + b; 

console.log(createPhoneNumber(8,  num,  result));
// Намудрил я здесь конечно ! 
// Не ругайте за короткие имена) 
// Чую можно было лаконичнее код написать,
// но пока ни как не складывается в голове...
// жду от ментора правки мозгов )))
//--------------------------------------------------

// 4. 
// Напиши функцию, которая ищет минимальное 
// и максимальное значение в массиве;

const arr = [3, 4, 1, 2, 87, -1, 7];
arr.sort((a, b) => a - b);

console.log(arr[0], arr[arr.length -1]);


// а я в 4-ом задании уже выполнил условие 5-го ) ...
// или sort нельзя было использовать ???
// вот без sort , но так намного длиннее код:

const arr2 = [3, 4, 1, 2, 87, -1, 7];
let minValueElem = arr2[0];
let maxValueElem = arr2[0];
for (i = 0; i < arr2.length; i++) {
  if (arr2[i] < minValueElem) {
    minValueElem = arr2[i];
  }
  if (arr2[i] > maxValueElem) {
    maxValueElem = arr2[i];
  }
}

console.log(minValueElem, maxValueElem);
//----------------------------------------------------

// 5. *Напиши функцию, которая на вход принимает массив, 
// а на выходе возвращает новый, отсортированный в порядке 
// возрастания, массив. Попробуй реализовать алгоритм 
// сортировки самостоятельно. Если не получается - почитай 
// про bubble sort и попробуй реализовать её.

function arraySorter(arr) {
  arr.sort((a, b) => a - b);
  console.log(arr);
}

arraySorter([3, 4, 1, 2, 87, -1, 7]);
