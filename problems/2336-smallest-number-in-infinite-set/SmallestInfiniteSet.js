const { MinPriorityQueue } = require('@datastructures-js/priority-queue');

const SmallestInfiniteSet = function () {
    this.presentIntegers = new Set();
    this.minHeap = new MinPriorityQueue();
    this.currentInteger = 1;
};

/**
 * @return {number}
 */
SmallestInfiniteSet.prototype.popSmallest = function () {
    if (this.minHeap.size() > 0) {
        const { element } = this.minHeap.dequeue();
        this.presentIntegers.delete(element);
        return element;
    }
    const result = this.currentInteger;
    this.currentInteger += 1;
    return result;
};

/**
 * @param {number} num
 * @return {void}
 */
SmallestInfiniteSet.prototype.addBack = function (num) {
    if (num >= this.currentInteger || this.presentIntegers.has(num)) {
        return;
    }
    this.minHeap.enqueue(num, num);
    this.presentIntegers.add(num);
};

/**
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */

module.exports = { SmallestInfiniteSet };
