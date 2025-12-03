// ===== .filter() PRACTICE =====

console.log("=== EXERCISE 1: Filter Even Numbers ===");
// TODO: Keep only even numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evens = numbers.filter(en => en % 2 === 0);

console.log("Original:", numbers);
console.log("Evens:", evens);
// Expected: [2, 4, 6, 8, 10]


console.log("\n=== EXERCISE 2: Filter Objects by Condition ===");
// TODO: Keep only adults (age >= 18)
const people = [
  { name: "Naufal", age: 22 },
  { name: "John", age: 17 },
  { name: "Sarah", age: 25 },
  { name: "Mike", age: 16 }
];
const adults = people.filter(ap => ap.age >= 18);

console.log("Adults:", adults);
// Expected: [
//   { name: "Naufal", age: 22 },
//   { name: "Sarah", age: 25 }
// ]


console.log("\n=== EXERCISE 3: Chain with .map() ===");
// TODO: Get names of people aged 20-30
const users = [
  { name: "Naufal", age: 22 },
  { name: "John", age: 35 },
  { name: "Sarah", age: 25 },
  { name: "Mike", age: 19 }
];
const youngAdultNames = users.filter(yan => yan.age >= 20 && yan.age <= 30).map(yan => yan.name);

console.log("Young adults (20-30):", youngAdultNames);
// Expected: ["Naufal", "Sarah"]


// ===== BONUS CHALLENGE =====
console.log("\n=== BONUS: Multiple Conditions ===");
// TODO: Keep products that are in stock AND price < 500
const products = [
  { name: "Laptop", price: 1000, inStock: true },
  { name: "Mouse", price: 50, inStock: true },
  { name: "Monitor", price: 300, inStock: false },
  { name: "Keyboard", price: 100, inStock: true }
];
const affordable = products.filter(p => p.inStock === true && p.price < 500);

console.log("Affordable & in stock:", affordable);
// Expected: [
//   { name: "Mouse", price: 50, inStock: true },
//   { name: "Keyboard", price: 100, inStock: true }
// ]