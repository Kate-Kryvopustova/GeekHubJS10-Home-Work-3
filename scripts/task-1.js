const result =[];
const start = 0;
const condition = 15;

function replacementFor(initialValue, maxValue, callback) {
  if (initialValue <= maxValue) {
    callback(initialValue++);
    replacementFor(initialValue, maxValue, callback);
  } else {
    return;
  }
}

replacementFor(start, condition, function (i) {
  result[i] = i * 2;
});
console.log(result)