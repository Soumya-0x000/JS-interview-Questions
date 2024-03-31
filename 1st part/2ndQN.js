const cl = console.log
var val = 10;
var val1 = 40;

(() => {
    let val1 = 70
    cl(val);

    var val = 20;
    
    cl(val);
    
    val = 50;

    cl(val1);
})(); //iife (immediately invoked function expression )

cl(val);

var val = 30;

cl(val);

// changing global var variable value by let inside a function is called shadowing
// but if we try to change the value of the global let variable using var, it t illegal shadowing