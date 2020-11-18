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
const arr = ["Яблоко", "Апельсин", "Груша"];

function myForEach(array, callback) {
  for( let i = 0; i < array.length; i++ ) {
    callback(array[i], i, array);
  }
}

myForEach(myarr, function(number) {
  console.log(number * 2);
});


myForEach(arr, function(item, index, array) {
  console.log(index + ':' + item + '(array:' + array + ')' );
});


//function myMap

const sample = [1, 2, 3, 4, 5];

function myMap(array, callback) {
  result = [];
  for( let i = 0; i < array.length; i++  ) {
    callback(array[i], i, array) 
  }
}

myMap(sample, function(array){
  result[result.length] = array * 2
  console.log(result)
})


//function mySort

//function myFilter

//function myFind

