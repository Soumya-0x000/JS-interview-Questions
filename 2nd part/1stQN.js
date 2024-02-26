function SSD() {
    console.log('SSD')
}

async function createData() {
    try {
        const res = await fetch('https://api.github.com/users/Soumya-0x000')
        return res.status
    } catch (error) {
        console.error('error')
        return undefined
    }
}  //Micro task queue has high priority

setTimeout(() => {
    console.log('\n')
    console.log(!undefined)
    console.log(Boolean(undefined))
    console.log(typeof(undefined))
    console.log(Boolean(null))
    console.log(typeof(null))
    console.log(typeof(Symbol('object')))
    console.log(typeof(234567890123456789012345678901234567890))
}, 1000);    //callback queue / task queue has low priority

SSD()

createData().then((code) => {
    console.log('Status code: ', code)
})

console.log('C')

Promise.resolve().then(() => console.log('D'))    //Micro task queue has high priority

console.log('E')
