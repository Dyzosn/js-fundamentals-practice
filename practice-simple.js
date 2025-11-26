// ===== UNDERSTAND setTimeout =====

const car = {
    brand: "Toyota",
    
    test1() {
        console.log("Immediate:", this.brand);
        
        // Wait 1 second, then run this function
        setTimeout(function() {
            console.log("After 1 sec (broken):", this.brand);
        }, 1000);  // 1000 ms = 1 second
    },
    
    test2() {
        console.log("Immediate:", this.brand);
        
        // Wait 2 seconds, then run this arrow function
        setTimeout(() => {
            console.log("After 2 sec (works):", this.brand);
        }, 2000);  // 2000 ms = 2 seconds
    }
};

car.test1(); // Will show undefined after 1 sec
car.test2(); // Will show "Toyota" after 2 sec