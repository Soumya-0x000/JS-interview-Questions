//Object.create() puts everything into existing object's prototype chain
//It takes an existing object and creates a new, empty object with the specified object as its prototype.  

const bike = Object.create({
    company: 'Kawasaki',
    color: 'Lime Green',
    model: 'ZX-10R',
    price: '20lac',
    changeProperty: function(value = 'Scratch your ass to get the') {
        const msg = `${value} ${this.company} ${this.model} ${this.color} variant....🏍️🏍️🏍️`
        return msg
    }
})

const customBike = Object.create(Object.getPrototypeOf(bike))
customBike.model = 'Ninja H2R'
Object.getPrototypeOf(customBike).color = 'Metallic Carbon Grey'

console.log('customBike: ', customBike)
console.log('\ncustomBike prototype: ' , Object.getPrototypeOf(customBike))
console.log('\nbike prototype: ' , Object.getPrototypeOf(bike), '\n')

console.log(bike.price)
console.log(bike.changeProperty.bind(bike)())
console.log(bike.changeProperty.bind(customBike)())

delete bike.price
console.log(bike.price)
