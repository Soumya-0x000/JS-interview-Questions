const students = [
    {name: 'John', email: 'john@example.com', age: 15},
    {name: 'Jane', email: 'jane@example.com', age: 30},
    {name: 'SSD', email: 'ssd@example.com', age: 17},
    {name: 'Arj', email: 'arj@example.com', age:21}
];

let mailArrPush = []
let mailArrUnshift = []
for(let i = 0; i< students.length; i++) {
    mailArrPush.push(students[i].email.toUpperCase())
    mailArrUnshift.unshift(students[i].email.toUpperCase())
}

console.log(mailArrPush)
console.log(mailArrUnshift)

const nameArr = students.map(name => name.name.toLowerCase())
console.log(...nameArr)
console.log({...nameArr})

const ageArrForeach= []
students.forEach(element => {
    ageArrForeach.unshift(element.age)
})
console.log(...ageArrForeach)
console.log({...students})

console.log(students.filter(val => val.age >= 18 && val.name.length > 3))

students.reduce((acc, val) => (
    console.log(`${acc} + ${val.age} = ${acc + val.age}`),
    acc + val.age
), 0)

const allOperationArr = students.map(val => {
    if(val.age < 18){ val.age += 5 }
    return val
}).filter(val => val.age >= 22).reduce((acc, val) => acc + val.age, 0)

console.log(`\nperson whose age is under 18 are added with 5 and then checked if the age is 22 or older, then those condition fulfilling ages are added together and the result is: ${allOperationArr}`)
