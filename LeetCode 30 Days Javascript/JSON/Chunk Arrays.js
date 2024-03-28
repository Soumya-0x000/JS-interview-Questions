/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    if(arr.length == 0) return [];
    
    const result = [arr.slice(0, size)];
    result.push(...chunk(arr.slice(size), size)) // spread operator to avoid nested sub-arrays
    
    return result;
};
