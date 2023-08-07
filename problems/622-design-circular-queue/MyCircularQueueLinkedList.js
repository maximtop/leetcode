/**
 * Doubly linked list node
 * @param val
 * @param prev
 * @param next
 * @constructor
 */
const ListNode = function (val, prev, next) {
    this.val = val || 0;
    this.prev = prev || null;
    this.next = next || null;
};

/**
 * @param {number} k
 */
const MyCircularQueue = function (k) {
    this.space = k;
    this.left = new ListNode();
    this.right = new ListNode();
    this.left.next = this.right;
    this.right.prev = this.left;
};

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function (value) {
    if (this.isFull()) {
        return false;
    }
    const cur = new ListNode(value);
    this.right.prev.next = cur;
    cur.next = this.right;
    this.right.prev = cur;
    this.space -= 1;
    return true;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function () {
    if (this.isEmpty()) {
        return false;
    }
    this.left.next = this.left.next.next;
    this.left.next.prev = this.left;
    this.space += 1;
    return true;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function () {
    if (this.isEmpty()) {
        return -1;
    }
    return this.left.next.val;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function () {
    if (this.isEmpty()) {
        return -1;
    }
    return this.right.prev.val;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function () {
    return this.left.next === this.right;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function () {
    return this.space === 0;
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
