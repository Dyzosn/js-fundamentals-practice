// temp-converter.js

// TODO: Convert these to arrow functions
const celsiusToFahrenheit = c => (c * 9/5) + 32;

const fahrenheitToCelsius = f => (f - 32) * 5/9;

// TODO: Use array methods with arrow functions
const temperatures = [0, 10, 20, 30, 40];

// Convert all to Fahrenheit
const inFahrenheit = temperatures.map(t => celsiusToFahrenheit(t)); 

// Filter temps above 50°F
const hot = inFahrenheit.filter(t => t > 50);

// Average temperature
const average = temperatures.reduce((initialValue, temperature) => initialValue + temperature, 0)/temperatures.length; 

console.log("Temps in F:", inFahrenheit);
console.log("Hot temps:", hot);
console.log("Average:", average);