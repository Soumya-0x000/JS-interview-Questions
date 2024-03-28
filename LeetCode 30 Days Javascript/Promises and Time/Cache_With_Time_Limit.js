
var TimeLimitedCache = function() {
    this.data = new Map();
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
    const currentTime = Date.now();
    if(this.data.has(key)){
        const entry = this.data.get(key);
        if(entry.expireTime > currentTime){
            entry.value = value;
            entry.expireTime = currentTime + duration;
            return true;
        }
    }
    this.data.set(key, {
        value,
        expireTime : currentTime + duration,
    });

    return false;
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
     const currentTime = Date.now();
    if(this.data.has(key)){
        const entry = this.data.get(key);
        if(entry.expireTime > currentTime){
            return entry.value;
        }
    }
    return -1;
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
    const currentTime = Date.now();
    let count = 0;
    for(const [key, entry] of this.data){
         if(entry.expireTime > currentTime){
            count++;
        }
    }
    return count;
    
};

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */
