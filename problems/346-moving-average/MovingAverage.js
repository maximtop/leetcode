/**
 * @param {number} size
 */
var MovingAverage = function(size) {
    this.arr = [];
    this.capacity = size;
    this.count = 0;
};

/**
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function(val) {
    if (this.count < this.capacity) {
        this.arr.push(val);
        this.count += 1;
    } else {
        this.arr.shift();
        this.arr.push(val);
    }

    return this.arr.reduce((acc, el) => acc + el, 0) / this.count;
};

/**
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */

module.exports = { MovingAverage };
