/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function() {
    if (this.length === 0) {
        return -1; // or any default value you prefer
    }
    return this[this.length - 1];
};