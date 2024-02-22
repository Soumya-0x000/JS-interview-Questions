try {
    console.log('val1 = ', val1, '\nval2 = ', val2, '\nval3 = ', val3);
} catch (error) {
    console.log('val1 = ', val1, '\nval2 = ', error.message, '\nval3 = ', error.message);
}

var val1 = 100;
let val2 = 200;
const val3 = 300

console.log('\n\nval1 = ', val1, '\nval2 = ', val2, '\nval3 = ', val3);