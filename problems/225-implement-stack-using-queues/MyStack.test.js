const MyStack = function () {
    this.queue = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
    this.queue.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
    let i = this.queue.length;
    while (i > 1) {
        const val = this.queue.shift();
        this.queue.push(val);
        i -= 1;
    }

    return this.queue.shift();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
    return this.queue.at(-1);
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
    return this.queue.length === 0;
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */

module.exports = { MyStack };
