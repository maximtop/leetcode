/**
 * @param {number} k
 */
const MyCircularQueue = function (k) {
    this.arr = Array(k);
    this.capacity = k;
    this.head = 0;
    this.count = 0;
};

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function (value) {
    if (this.count === this.capacity) {
        return false;
    }
    this.arr[(this.head + this.count) % this.capacity] = value;
    this.count += 1;
    return true;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function () {
    if (this.count === 0) {
        return false;
    }
    this.head = (this.head + 1) % this.capacity;
    this.count -= 1;
    return true;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function () {
    if (this.count === 0) {
        return -1;
    }

    return this.arr[this.head];
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function () {
    if (this.count === 0) {
        return -1;
    }

    return this.arr[(this.head + this.count - 1) % this.capacity];
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function () {
    return this.count === 0;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function () {
    return this.count === this.capacity;
};

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */

module.exports = { MyCircularQueue };
