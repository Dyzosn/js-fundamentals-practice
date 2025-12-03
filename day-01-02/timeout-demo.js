console.log("START");

setTimeout(function() {
    console.log("This prints after 1 second");
}, 1000);

setTimeout(() => {
    console.log("This prints after 2 seconds");
}, 2000);

setTimeout(() => {
    console.log("This prints after 500ms (0.5 second)");
}, 500);

console.log("END");