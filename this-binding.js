// ===== UNDERSTANDING 'this' - JAVA vs JAVASCRIPT =====

// In Java/C++: 'this' is stable, always refers to object instance
// In JavaScript: 'this' changes based on HOW function is called!


// ===== SCENARIO 1: Direct call - 'this' works =====
const car = {
  brand: "Toyota",
  
  showBrand: function() {
    console.log("My car is:", this.brand);
    // 'this' = car object ✅
  }
};

car.showBrand(); // "My car is: Toyota" ✅


// ===== SCENARIO 2: Inside callback - 'this' is lost! =====
const car2 = {
  brand: "Toyota",
  
  showBrandLater: function() {
    console.log("Before timeout:", this.brand); // Works ✅
    
    setTimeout(function() {
      // This is ANONYMOUS FUNCTION
      console.log("After timeout:", this.brand); // undefined ❌
      // WHY? setTimeout calls this function in DIFFERENT context
      // 'this' now = global object (window in browser, global in Node)
    }, 1000);
  }
};

car2.showBrandLater();


// ===== SCENARIO 3: Arrow function - 'this' is preserved! =====
const car3 = {
  brand: "Toyota",
  
  showBrandLater: function() {
    console.log("Before timeout:", this.brand); // Works ✅
    
    setTimeout(() => {
      // This is ARROW FUNCTION
      console.log("After timeout:", this.brand); // Works ✅
      // WHY? Arrow function INHERITS 'this' from parent scope
      // 'this' still = car3 object
    }, 2000);
  }
};

car3.showBrandLater();


// ===== WHEN NOT TO USE ARROW FUNCTION =====
const car4 = {
  brand: "Toyota",
  
  // ❌ DON'T use arrow function as object method!
  showBrand: () => {
    console.log(this.brand); // undefined ❌
    // Arrow function inherits 'this' from OUTSIDE the object
    // There's no 'this' outside, so it's undefined!
  }
};

car4.showBrand(); // undefined ❌