function create() {
    var obj = Object.create({
        fName: 'Soumya',
        mName: 'Sankar',
        lName: 'Das',
        fullName: function () {
            return `${this.fName} ${this.mName} ${this.lName}`
        }
    })

    var person1 = Object.create(Object.getPrototypeOf(obj))
    var person2 = Object.create(Object.getPrototypeOf(obj))

    console.log(Object.getPrototypeOf(person1))
    
    person1.fName = 'Hare'
    person1.mName = 'Krishna'
    person1.lName = 'Hare Krishna'
    
    person2.fName = 'Krishna'
    person2.mName = 'Krishna'
    person2.lName = 'Hare Hare'

    console.log(obj.fullName());
    console.log(person1.fullName());
    console.log(person2.fullName());
    console.log('\n');
    
    Object.entries(person2).map( (a) => console.log({...a}) );
    Object.entries(person1).filter(([a, b]) => (a === 'lName' && console.log(`${a}: ${b}`)) );
    
    const name1 = obj.fullName.call(person1)
    const name2 = obj.fullName.bind(person2)
    console.log(name1, name2())
}

const fillArr = {
    cl: console.log,
    using_fill: function(val) {
        let arr = new Array(6).fill(val)
        this.cl(arr)
    },
    using_from: function(val) {
        let arr = Array.from({length: 6}, () => val)
        this.cl(arr)
    }
}

setTimeout(() => {
    const bind_arr = fillArr.using_fill.bind(fillArr, 'Gopal')
    bind_arr();
    fillArr.using_from.bind(fillArr, 'Hari')()
}, 2000);

create()

console.log('\n');

fillArr.using_fill.call(fillArr, 'Madhab');
fillArr.using_from.call(fillArr, 'Govind');
fillArr.using_from.bind(fillArr, 'Keshab')();

Promise.resolve().then(() => fillArr.using_fill.call(fillArr, 'Ram'))
Promise.reject()
    .then(() => { fillArr.using_fill.call(fillArr, 'Ram') })
    .catch((error) => console.error('rejected the promise'))
