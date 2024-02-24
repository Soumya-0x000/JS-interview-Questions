function create() {
    var obj = Object.create({
        fName: 'Soumya',
        mName: 'Sankar',
        lName: 'Das',
        fullName: function () {
            return `${this.fName} ${this.mName} ${this.lName}`
        }
    })
}