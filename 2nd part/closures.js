(function(x = 40) {
    console.log(x)

    var x = 10;

    (function() {
        x = 20
        console.log(x)
    })()

    console.log(x)
    x = 30;
})(50)
