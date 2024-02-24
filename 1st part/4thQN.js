const cl= console.log

val = 10;
// yoo = 200;

(() => {
    yoo = 100;
    cl(val);

    var yoo = 300;
    val = 20;

    cl(val);
})();

cl(yoo);
cl(val);

var val = 30;
