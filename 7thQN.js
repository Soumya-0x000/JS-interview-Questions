const bike = {
    company: 'Kawasaki',
    color: 'Lime Green',
    model: 'ZX-10R',
    price: '20lac',
    isOwned: function() {
        return `I will own a ${this.company} ${this.model} whose color will be ${this.color} worth of ${this.price} rupees`;
    },
    changeProperty: function(value) {
        console.log(`\nEarn some nearly about ${parseFloat(this.price) * 2 + 'lac'} to get the ${this.company} ${this.model}`)
        console.log(value, `${this.company} ${this.model} ${this.color} variant`)
    }
}

const dreamBike = {
    company: 'BMW',
    color: 'White Blue',
    model: 'S-1000-RR',
    price: '40lac',
}

const customBike = {
    company: 'Triumph', 
    color: 'Matt-Silver-Ice',
    model: 'Speed Triple 1200 RS',
    price: '19lac'
}

const calculateTime = {
    changeable: 388.31,
    changeableTime: 0.8,
    changeableUnit: 'Hvg',
    multipliedBy: 1000,
    comparable: 2.50,
    comparableUnit: 'Svg',
    comparableTime: 10
}

function testing () {
    function comparing () {
        const calculatedValue = ((this.comparableTime/this.changeableTime) * this.changeable)/this.comparable
        const text = `${this.changeable+this.changeableUnit} is ${calculatedValue} times of ${this.comparable+this.comparableUnit}` 
        
        return text
    }

    function logMsg () {
        return `${this.company} ${this.model} worths nearly around ${parseFloat(this.price) + 'lac'}`
    }

    console.log('\n')
    console.log(comparing.call(this.calculateTime))
    console.log(logMsg.call(this.customBike))
}

console.log(bike.isOwned())
console.log(bike.isOwned.call(dreamBike))
bike.changeProperty.call(customBike, 'Scratch your ass to get the')
testing.call({ calculateTime, customBike })