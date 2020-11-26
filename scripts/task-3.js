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

sum(1)(2)(3);
sum(0)(1)(2)(3)(4)(5);
sum(2)(5)(5)(1)(7);
