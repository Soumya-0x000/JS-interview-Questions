{
    var a = 5
    let b = 4
    var c = 6
}
console.log(a)
// console.log(b)
// console.log(c)

// c = 80
var glbScp = 'Global';

(() => {
    var outerScp = 'Outer Scope';
    (() => {
        var innerScp = 'Inner Scope'
        console.log(innerScp)
        console.log(outerScp)
        console.log(glbScp)
    })()
})()  //closure example

console.log(c)

// let x;      Identifier 'x' has already been declared
// let x;      Identifier 'x' has already been declared

// const y;         Missing initializer in const declaration
// const y;         Missing initializer in const declaration
