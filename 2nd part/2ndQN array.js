function SSD() {
    console.log('SSD')
}

setTimeout(() => {
    console.log('B')
}, 2000);

SSD()

fetch('https://api.github.com/users/Soumya-0x000')
    .then(() => { console.log('Got the data') })
    .catch((error) => console.error(error))

console.log('C')

Promise.resolve().then(() => console.log('D'))

console.log('E')
