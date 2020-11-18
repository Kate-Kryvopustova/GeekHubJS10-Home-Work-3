// Написать функционал оператора for


// let arrayNumbers;

function replacementFor(number) {
  
  if(number === 0) {
    return console.log('end');
  } else if(number > 0) {
    console.log(number)
    return replacementFor(number -= 1)
  } else if (number < 0) {
    console.log(number);
    return replacementFor(number += 1)
  }
}

replacementFor(-5);
replacementFor(+5);
replacementFor(0);

function replaceFor(a, b) {
  if(a === b){
    return console.log('the numbers are the same');
  } else if(a < b){
    console.log(a);
    a++
    replaceFor(a, b);
  } else if(a > b){
    console.log(a);
    a--;
    replaceFor(a, b);
  }
}

replaceFor(1,10);
replaceFor(10,1);
replaceFor(10,10);