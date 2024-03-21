var arr = [1, 2, 3, 4, 5, 6];
((...numArr) => {
    console.log(numArr)
    console.log(numArr.reduce((acc, val) => {
        return acc * val
    }, 1));
})(...arr);

console.log(...'SoUmYa')

function restSpread(a, b, c, ...d) {
    console.log(a, b, c, d);
}

restSpread(3, 6, 4, 8, 9, 2);
