//Реализовать функцию sum(1)(2)(3) // 6

function sum() {

  let currentSum = 0;

  for (let i = 0; i < arguments.length; i++) {
    currentSum += arguments[i]
  }

  function nextValue(secondValue) {

    if (arguments.length) {
      currentSum += secondValue;
      return nextValue;
    } else {
      return currentSum;
    }

  }

  nextValue.toString = function () {
    return currentSum
  }

  return nextValue;
}

console.log(sum(1)(2)(3)) // 6
Console.log(sum(0)(1)(2)(3)(4)(5)); // 15
console.log(sum(2)(5)(5)(1)(7)) //20
