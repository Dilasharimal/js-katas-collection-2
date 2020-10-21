// 1 Add
function addTheNumber(a, b) {
  return a + b;
}
console.log(addTheNumber(7, 13));

//2 Multiply
function multiplyTheNumbers(a, b) {
  let count = 0;
  let result = 0;
  while (count < b) {
    result = addTheNumber(a, result);
    count++;
  }
  return result;
}
console.log(multiplyTheNumbers(11, 17));

//3 Power
function powerOfNumber(x, n) {
  let count = 0;
  let result = 1;
  while (count < n) {
    result = multiplyTheNumbers(x, result);
    count++;
  }
  return result;
}
console.log(powerOfNumber(2, 10));

// 4 Factorial
function factorialOfNumber(f) {
  let count = 0;
  let result = 1;
  while (count < f) {
    result = multiplyTheNumbers(f, result);
    f--;
  }
  return result;
}
console.log(factorialOfNumber(8));

// 5 Fibonacci
let fibonacci = function (num) {
  if (num === 1) {
    return 0;
  }
  if (num === 2) {
    return 1;
  }
  return fibonacci(num - 1) + fibonacci(num - 2);
};
console.log(fibonacci(15));
