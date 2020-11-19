/* 
5) Создать новые методы для всех массивов:
 - myForEach - тот же самый forEach
 - myMap - тот же самый map
 - mySort - тот же самый sort
 - myFilter
 - myFind
Внутри нельзя использовать готовые методы массива, никакие﻿
*/

// function myForEach
const myarr = [1, 2, 3];
const array1 = ["Яблоко", "Апельсин", "Груша"];

function myForEach(array, callback) {
  for( let i = 0; i < array.length; i++ ) {
    callback(array[i], i, array);
  }
}

myForEach(myarr, function(number) {
  console.log(number * 2);
});


myForEach(array1, function(item, index, array) {
  console.log(index + ':' + item + '(array:' + array + ')' );
});


//function myMap

const test = [1, 2, 3, 4, 5];

function myMap(array, callback) {
  result = [];
  for( let i = 0; i < array.length; i++  ) {
    callback(array[i], i, array) 
  }
}

myMap(test, function(array){
  result[result.length] = array * 2
  console.log(result)
})



//function myFind

const array = [5, 2, 3, 4, 5];
const findElement = [3];

function myFind(array, findElem) {
  let result = [];
  check: for (let i = 0; i <= array.length; i++) {
    if (array[i] === findElem[0]) {
      if (result[0] !== findElem) {
        result[result.length] = array[i];
        break check;
      }
    }
  }
  if (result[0] === findElement[0]) {
    return result;
  } else {
    return undefined;
  }
}
console.log(myFind(array, findElement));

//function myFilter

const sample = [1, 2, 3, 4, 5];

function myFilter1(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== 2) {
      result[result.length] = array[i];
    }
  }
  return result;
}

console.log(myFilter1(sample))

//function mySort
let a = [1, 10, 9, 7]
let arr2 = [1, 2, 3, 4, 10, 6, 7, 8, 9, 5];
let arr = ['t', 'r', 'o', 'l', 'o', 'lo'];

const bubbleSort1 = array => {
  let count = array.length - 1;
  for (let i = 0; i < count; i++) {

    for (let j = 0, value = count - i; j < value; j++) {

      if (array[j] > array[j + 1]) {
        let maxValue = array[j];
        array[j] = array[j + 1];
        array[j + 1] = maxValue;        
      }
    }
  }
  return array;
};

console.log(bubbleSort1(a))
console.log(bubbleSort1(arr))
console.log(bubbleSort1(arr2))

