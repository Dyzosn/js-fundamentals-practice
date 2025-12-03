// ===== .reduce() PRACTICE =====

console.log("=== EXERCISE 1: Sum Array ===");
// TODO: Sum all numbers
const numbers = [5, 10, 15, 20, 25];
const sum = numbers.reduce((acc, n) => acc + n, 0);

console.log("Numbers:", numbers);
console.log("Sum:", sum);
// Expected: 75


console.log("\n=== EXERCISE 2: Count Occurrences ===");
// TODO: Count how many times each fruit appears
const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
const count = fruits.reduce((acc, fruit) => {
    if (!acc[fruit]) {
        acc[fruit] = 0;
    }
    acc[fruit]++;
    return acc;
}, {});

console.log("Fruits:", fruits);
console.log("Count:", count);
// Expected: { apple: 3, banana: 2, orange: 1 }


console.log("\n=== EXERCISE 3: Flatten Array ===");
// TODO: Flatten nested array into single array
const nested = [[1, 2], [3, 4], [5, 6]];
const flat = nested.reduce((acc, arr) => acc.concat(arr), []);

console.log("Nested:", nested);
console.log("Flat:", flat);
// Expected: [1, 2, 3, 4, 5, 6]


// ===== BONUS CHALLENGE =====
console.log("\n=== BONUS: Calculate Total Price ===");
// TODO: Get total price of all items in cart
const cart = [
  { name: "Laptop", price: 1000, quantity: 1 },
  { name: "Mouse", price: 50, quantity: 2 },
  { name: "Keyboard", price: 100, quantity: 1 }
];
const totalPrice = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

console.log("Cart:", cart);
console.log("Total price:", totalPrice);
// Expected: 1200 (1000*1 + 50*2 + 100*1)