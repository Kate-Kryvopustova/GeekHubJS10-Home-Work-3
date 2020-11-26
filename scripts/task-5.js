const myarr = [1, 2, 3];
const test = [1, 2, 3, 4, 5];
const array = [5, 2, 3, 4, 5];
const findElement = [3];
const sample = [1, 2, 3, 4, 5];
const a = [1, 10, 9, 7]
const arr2 = [1, 2, 3, 4, 10, 6, 7, 8, 9, 5];
const arr = ['t', 'r', 'o', 'l', 'o', 'lo'];

Array.prototype.myForEach = function(callback) {
  for( let i = 0; i < this.length; i++ ) {
    this[i] = callback(this[i], i, this);
  }
  return this;
}
arr2.myForEach(value => value * 2);

//function myMap
Array.prototype.myMapp = function(callback) {
  let result = [];

  for( let i = 0; i < this.length; i++  ) {
    result[i] = callback(this[i], i, this);
  }
  return result;
}
a.myMapp(value => value * 2);

//function myFind
Array.prototype.myFind = function (callback) {
 
  for (let i = 0; i < this.length; i++) {
   if (callback(this[i], i, this)) {
     return this[i];
     }
   }
 return undefined;
}
arr2.myFind(elem => elem === 15);
arr2.myFind(elem => elem === 10);

//function myFilter
Array.prototype.myFilter = function(callback) {
  let result = [];
  for(let i = 0; i < this.length; i++) {
    if(callback(this[i], i, this)) {
      result[result.length] = this[i];
    }
  }
  return result;
}
arr2.myFilter(elem => elem !== 2);

//function mySort
Array.prototype.bubbleMySort = function() {
  let count = this.length - 1;
  for (let i = 0; i < count; i++) {

    for (let j = 0, value = count - i; j < value; j++) {

      if (this[j] > this[j + 1]) {
        let maxValue = this[j];
        this[j] = this[j + 1];
        this[j + 1] = maxValue;        
      }
    }
  }
  return this;
}

a.bubbleMySort();
arr.bubbleMySort();
arr2.bubbleMySort();