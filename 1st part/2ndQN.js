const cl = console.log
var val = 10;

(() => {
    cl(val);

    var val = 20;
    
    cl(val);
    
    val = 50;
})(); //iife (immediately invoked function expression )

cl(val);

var val = 30;

cl(val);
