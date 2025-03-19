

// урок 11


/* 1. Напиши функцию, которая принимает строку и проверяет,
 является ли она палиндромом. Если да - функция возвращает 
 true, если нет - false; */

function isPalindrom(str) {
  let strLowNoSpaces = str.toLowerCase().replaceAll(' ', '');
  let check = '';
  for (let i = strLowNoSpaces.length -1; i >= 0; --i) {
    check += strLowNoSpaces[i];
  }
  return strLowNoSpaces === check;
}

console.log(isPalindrom('А роза упала на лапу Азора'));
//------------------------------------------



/* 2. Напиши функцию, которая принимает строку (предложение) 
и находит первое самое короткое слово в ней и возвращает его; */

function shortestWordFinder(str) {
  const arr = str.split(' ');
  let shortestWord = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length < shortestWord.length) {
      shortestWord = arr[i];
    }
    if (arr == '') {
      console.log('строка пуста')
    }
  }
  console.log(shortestWord);
    
}

shortestWordFinder('пусть всегда будет мама')

// 3. Напиши функцию, которая форматирует 
// строку с цифрами в телефонный номер. 
// Пример: createPhoneNumber(123456789) → 
// 8 (123) 456-789;


//-----------------------------------------------

function createPhoneNumber(number) {
  const str = String(number);
  if (str.length !== 9) {
    return 'Некорреткная длина номера! Ожидается 9 цифр.'
  }
    return `8 (${str.slice(0, 3)}) ${str.slice(3, 6)}-${str.slice(6, 9)}`;
}

console.log(createPhoneNumber(987654321));

// 4. 
// Напиши функцию, которая ищет минимальное 
// и максимальное значение в массиве;

function minAndMaxElemOfArrFinder(arr) {
  const sortedArr = [...arr].sort((a, b) => a - b);
  if (arr == '') {
    return alert('массив пуст!');
  }
  console.log(sortedArr[0], sortedArr[sortedArr.length -1]); 
}

minAndMaxElemOfArrFinder([3, 4, 1, 2, 87, -1, 7])


// а я в 4-ом задании уже выполнил условие 5-го ) ...
// вот без sort:

function minAndMaxElemOfArrFinder2(arr2) {
let minValueElem = arr2[0];
let maxValueElem = arr2[0];
for (let i = 0; i < arr2.length; i++) {
  if (arr2[i] < minValueElem) {
    minValueElem = arr2[i];
  }
  if (arr2[i] > maxValueElem) {
    maxValueElem = arr2[i];
  }
}

console.log(minValueElem, maxValueElem);
}

minAndMaxElemOfArrFinder2([4, 1, 2, 7])

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

//----------------------
// Bubble sort

  let arr = [3, 4, 1, 11, 8, 2];
  for (let j = arr.length - 1; j > 0; j--) {
    for (let i = 0; i < j; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
  }
  console.log(arr);

//--------------

