/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    var joinedHashMap = {}

    // concat arr1 and arr2
    for(var objFromArray of arr1.concat(arr2)) {
        var id = objFromArray.id;
        // check if id (object as a value) already in hashMap
        joinedHashMap[id] ?
        // if yes, assign new value to it using spread operator "..." combining 2 objects
        joinedHashMap[id] = {...joinedHashMap[id], ...objFromArray} :
        // if no, assing object from array as a value
        joinedHashMap[id] = objFromArray
    }
    // since we don't need keys and only values, we use Object.values({}) method which will return an array of values
    return Object.values(joinedHashMap)
    // joinedHashMap looks like this {"1":{"id":1,"x":1},"2":{"id":2,"x":9},"3":{"id":3,"x":5}}
    // Object.values(joinedHashMap) returns it like this [{"id":1,"x":1},{"id":2,"x":9},{"id":3,"x":5}]
};