// ===== .map() PRACTICE =====

console.log("=== EXERCISE 1: Transform Numbers ===");
// TODO: Multiply each number by 2
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);

console.log("Original:", numbers);
console.log("Doubled:", doubled);
// Expected: [2, 4, 6, 8, 10]


console.log("\n=== EXERCISE 2: Extract Properties ===");
// TODO: Extract just the names
const users = [
  { name: "Naufal", age: 22, city: "Sydney" },
  { name: "John", age: 25, city: "Melbourne" },
  { name: "Sarah", age: 23, city: "Brisbane" }
];
const names = users.map(u => u.name);

console.log("Names:", names);
// Expected: ["Naufal", "John", "Sarah"]


console.log("\n=== EXERCISE 3: Create JSX-like Elements ===");
// TODO: Convert each product to an HTML-like string
const products = ["Laptop", "Mouse", "Keyboard"];
const productList = products.map(p => p = `<li>${p}</li>`);

console.log("Product list:");
productList.forEach(item => console.log(item));
// Expected:
// <li>Laptop</li>
// <li>Mouse</li>
// <li>Keyboard</li>


// ===== BONUS CHALLENGE =====
console.log("\n=== BONUS: Complex Transformation ===");
// TODO: Add 10% discount to all prices and format as currency
const items = [
  { name: "Laptop", price: 1000 },
  { name: "Mouse", price: 50 },
  { name: "Keyboard", price: 100 }
];
const discounted = items.map(i => {
  return {
    name: i.name,
    originalPrice: i.price,
    salePrice: i.price - (i.price * 0.1)
  };
});
// Transform to: [
//   { name: "Laptop", originalPrice: 1000, salePrice: 900 },
//   { name: "Mouse", originalPrice: 50, salePrice: 45 },
//   { name: "Keyboard", originalPrice: 100, salePrice: 90 }
// ]

console.log("Discounted items:", discounted);