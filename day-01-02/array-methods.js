// ===== ARROW FUNCTIONS WITH ARRAY METHODS =====

const numbers = [1, 2, 3, 4, 5];

// .map() - transform array
const doubled = numbers.map(num => num * 2);
console.log("Doubled:", doubled); // [2, 4, 6, 8, 10]

// .filter() - keep items that match condition
const evens = numbers.filter(num => num % 2 === 0);
console.log("Evens:", evens); // [2, 4]

// .reduce() - combine into single value
const sum = numbers.reduce((total, num) => total + num, 0);
console.log("Sum:", sum); // 15


// REAL EXAMPLE: Products
const products = [
  { name: "Laptop", price: 1000 },
  { name: "Mouse", price: 50 },
  { name: "Keyboard", price: 100 }
];

// Get names only
const names = products.map(p => p.name);
console.log("Names:", names);

// Get expensive products (> $100)
const expensive = products.filter(p => p.price > 100);
console.log("Expensive:", expensive);

// Total price
const total = products.reduce((sum, p) => sum + p.price, 0);
console.log("Total:", total);