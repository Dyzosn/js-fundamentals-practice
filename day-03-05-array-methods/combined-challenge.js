// ===== COMBINED CHALLENGE: E-Commerce Filter =====

const products = [
  { id: 1, name: "Laptop", price: 1000, category: "electronics", rating: 4.5 },
  { id: 2, name: "Mouse", price: 50, category: "electronics", rating: 4.2 },
  { id: 3, name: "Shirt", price: 30, category: "clothing", rating: 4.0 },
  { id: 4, name: "Monitor", price: 300, category: "electronics", rating: 4.8 },
  { id: 5, name: "Keyboard", price: 100, category: "electronics", rating: 4.3 },
  { id: 6, name: "Jeans", price: 80, category: "clothing", rating: 3.9 }
];

// TODO 1: Get all electronics products
const electronics = products.filter(p => p.category === "electronics").map(p => p.name);

// TODO 2: Get names of highly-rated products (rating >= 4.5)
const topRated = products.filter(p => p.rating >= 4.5).map(p => p.name);

// TODO 3: Calculate average price of electronics
const avgElectronicsPrice = products.filter(p => p.category === "electronics").reduce((acc, ep) => acc + ep.price, 0)/(products.filter(p => p.category === "electronics")).length;

// TODO 4: Get total value if you buy 1 of each electronic item
const totalElectronicsValue = products.filter(p => p.category === "electronics").reduce((acc, ep) => acc + ep.price, 0);

// TODO 5: Get categories (unique, no duplicates)
const categories = [...new Set(products.map(p => p.category))];


console.log("1. Electronics:", electronics);
console.log("2. Top rated names:", topRated);
console.log("3. Avg electronics price:", avgElectronicsPrice);
console.log("4. Total electronics value:", totalElectronicsValue);
console.log("5. Categories:", categories);

// Expected:
// 1. [Laptop, Mouse, Monitor, Keyboard]
// 2. ["Laptop", "Monitor"]
// 3. 362.5
// 4. 1450
// 5. ["electronics", "clothing"]