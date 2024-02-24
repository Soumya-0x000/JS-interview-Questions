const bike = {
    company: 'Kawasaki',
    color: 'Lime Green',
    model: 'ZX-10R',
    price: '20lac',
    changeProperty: function(value) {
        console.log(value, `${this.company} ${this.model} ${this.color} variant....🏍️🏍️🏍️`)
    }
}

//bind() returns a new function where call() directly calls the function
const newFunc1 = bike.changeProperty.bind(bike, 'Scratch your ass to get the')
const newFunc2 = bike.changeProperty.bind(bike)

newFunc2('Scratch your ass to get the')
setTimeout(newFunc1, 1000);
setTimeout(() => bike.changeProperty('Scratch your ass to get the'), 1000);
setTimeout(() => newFunc1(), 1000);
