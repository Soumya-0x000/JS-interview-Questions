var fName = 'Soumya Sankar Das';

var obj = {
    fName: 'Hacked full name',

    prop: {
        fName: 'Inside prop',
        getFullName: function () {
            return this.fName
        },
    },

    getFullName: function () {
        return this.fName
    },

    getFullNameV2: function () {
        return this.fName
    },

    getFullNameV2: () => {
        return {
            fName:this.fName,
            context:this
        };
    },

    getFullNameV3: (function() {
        return {
            fName:this.fName,
            context:this
        };
    })(),
};

console.log(obj.prop.getFullName());
console.log(obj.getFullName());
console.log(obj.getFullNameV2());
console.log(obj.getFullNameV3());
