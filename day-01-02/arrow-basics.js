// ===== ARROW FUNCTION BASICS =====

// Regular function
function add(a, b) {
  return a + b;
}

// Arrow function - LONG form
const addArrow = (a, b) => {
  return a + b;
};

// Arrow function - SHORT form (implicit return)
const addShort = (a, b) => a + b;

// TEST IT:
console.log(add(5, 3));        // 8
console.log(addArrow(5, 3));   // 8
console.log(addShort(5, 3));   // 8


// ===== RULES =====
// 1 parameter? No () needed
const double = num => num * 2;

// 0 parameters? Need ()
const greet = () => "Hello!";

// Return object? Need () around {}
const makePerson = (name, age) => ({ name, age });

// TEST IT:
console.log(double(4));              // 8
console.log(greet());                // "Hello!"
console.log(makePerson("Naufal", 22)); // { name: 'Naufal', age: 22 }