// ===== YOUR TURN =====

// PROBLEM 1: Convert to arrow function
function square(x) {
  return x * x;
}
// TODO: Write arrow function version here
const squareArrow = x => x *x;  


// PROBLEM 2: Filter numbers greater than 10
const nums = [5, 12, 8, 20, 3, 15];
// TODO: Use .filter() with arrow function
const bigNums = nums.filter(n => n > 10); 


// PROBLEM 3: Fix the counter
const counter = {
  count: 0,
  start: function() {
    setInterval(() => {
      this.count++;
      console.log(this.count); // undefined ❌
    }, 1000);
  }
};
// TODO: Fix using arrow function


// TEST YOUR SOLUTIONS:
console.log(squareArrow(4));     // Should be 16
console.log(bigNums);            // Should be [12, 20, 15]
counter.start();                 // Should count 1, 2, 3...