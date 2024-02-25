function SSD() {
    console.log('SSD')
}

setTimeout(() => {
    console.log('B')
}, 2000);

SSD()

console.log('C')

Promise.resolve().then(() => console.log('D'))
