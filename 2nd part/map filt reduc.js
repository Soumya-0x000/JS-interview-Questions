const arr = [ 7, 3, 15, 12, 8, 5, 4, 10, 6, 2, 1, 13, 9, 14, 11 ]

const mappedArr = arr.map((val, indx, orgArr) => ({
    index: indx,
    val: val*val,
    orgVal: orgArr[indx]
})
).filter((val) => val.orgVal % 2 === 0)

// console.log(mappedArr)

const reducedArr = mappedArr.reduce((acc, crntVal, indx, arr) => {
    // console.log(`acc(${acc}) + crntVal.val(${crntVal.val}) + crntVal.index(${crntVal.index}) + indx(${indx}) = ${acc + crntVal.val + indx + crntVal.index}`)
    return (acc + crntVal.val + indx + crntVal.index)
}, 450)

// console.log(`Reduced value: ${reducedArr}`)
// console.log(...arr)
// console.log({...arr})

const forEachRslt = mappedArr.forEach((val, indx) => {
    val.val = val.val/val.orgVal
})
console.log(forEachRslt, mappedArr)

