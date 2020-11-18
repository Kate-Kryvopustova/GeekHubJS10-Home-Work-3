//Реализовать функцию sum sum(1)(2)(3) // 6

function sum(firstArg) {

  let currentSum = firstArg;

  function nextValue(secondArg) {
    
    currentSum += secondArg;
    console.log(currentSum)
    return nextValue;
  }

  return nextValue;
}

sum(1)(2)(3) // 6
sum(0)(1)(2)(3)(4)(5); // 15