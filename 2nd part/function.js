// // functions can be treated like variables, those are called first class function
// // functions can be stored in variables, can be passed as arguments to other functions and returned from them.
// // functions can be hoisted to the top level of a program

// function sqr(val) {
//     return val*val;
// }

// (function (fn, val) {
//     console.log(`Square of ${val} is ${fn(val)} `)
// })(sqr, 7);


// // for(let i = 0; i < 6; i ++) {
// //     setTimeout(function() {
// //         console.log(i)
// //     }, i * 1000)
// // }


// (() => {
//     var coo = 400;
//     (() => {
//         console.log(coo)        //undefined
//         var coo = 450
//     })()
//     console.log(coo);           //400
// })()
// console.log(coo);               //undefined
// {
//     var coo = 500;
// }
// console.log(coo)                //500

// lord = 'giridhari'
// function greet(lord){
//     console.log(`\nSupreme lord ${lord}`)
//     console.log(`Supreme lord ${this.lord}\n`)
// }

// function doSomething(callback) {
//     nam = 'Vishnu'
//     callback(nam)
// }
// doSomething(greet)

// const testObj = {
//     name: 'buddy',
//     printName1: () => {
//         console.log(`Hello ${this.name}`)
//     },
//     printName2() {
//         console.log(`Hello ${this.name}`)
//     }
// };
// testObj.printName1();
// testObj.printName2();

nam = 'Somu';

function outerFunc() {
    var nam = 'Soumya';
    console.log(`\nOuter: Hi, I am ${nam} AKA ${this.nam}`);
    function innerFunc() {
        console.log(`Inner: Hi, I am ${nam} AKA ${this.nam}\n`);
        const tempObj = {
            nam: 'SSD',
            print1: () => {
                console.log(`print1: Hi, I am ${this.nam}`)
            },
            print2: function() {
                console.log(`print2: Hi, I am ${this.nam}`)
                // console.log(this)
            },
            print3: (() => {
                console.log(`print3: Hi, I am ${this.nam}`)
            })(),
            print4: (function() {
                console.log(`print4: Hi, I am ${this.nam}`)
            })(),
            changeVal: (function() {
                return this.nam = 'SSDas'
            })(),
            print5: (function() {
                console.log(`print5: Hi, I am ${this.nam}\n`)
            })(),
            print6: (function() {
                console.log( `print6_1: Hi, I am ${nam}` )
                console.log( `print6_2: Hi, I am ${this.nam}\n` )
            })(),
        };
        tempObj.print1();
        tempObj.print2();
    }
    innerFunc();
    console.log('\nInner end:_______________' + this.nam + '\n')
    return innerFunc;
}
const callFunc = outerFunc()
callFunc()
console.log('\nOuter end:_______________' + this.nam + '\n')
outerFunc()();
