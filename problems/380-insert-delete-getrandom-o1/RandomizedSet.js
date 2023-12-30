const RandomizedSet = function () {
    this.map = new Map();
    this.arr = [];
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
    if (this.map.has(val)) {
        return false;
    }
    this.map.set(val, this.arr.length);
    this.arr.push(val);
    return true;
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
    if (this.map.has(val)) {
        const idx = this.map.get(val);
        const last = this.arr.at(-1);
        this.arr[idx] = last;
        this.arr.pop();
        this.map.set(last, idx);
        this.map.delete(val);

        return true;
    }
    return false;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
    const randomIdx = Math.floor(Math.random() * this.arr.length);
    return this.arr[randomIdx];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

module.exports = { RandomizedSet };
