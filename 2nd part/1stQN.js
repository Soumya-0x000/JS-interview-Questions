function SSD() {
    console.log('SSD')
}

async function createData() {
    return 1
}

setTimeout(() => {
    console.log('B')
}, 2000);

SSD()

createData().then((data) => {
    console.log('Got the data', data)
})

console.log('C')

Promise.resolve().then(() => console.log('D'))

console.log('E')
