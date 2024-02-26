function SSD() {
    console.log('SSD')
}

async function createData() {
    let status = undefined
    try {
        const res = await fetch('https://api.github.com/users/Soumya-0x000')
        status = res.status
    } catch (error) {
        console.error('error')
    }
    return status
}  //Micro task queue has high priority

setTimeout(() => {
    console.log('B')
}, 1000);    //callback queue / task queue has low priority

SSD()

createData().then((code) => {
    console.log('Status code: ', code)
})

console.log('C')

Promise.resolve().then(() => console.log('D'))    //Micro task queue has high priority

console.log('E')
