class DoubleListNode {
    constructor(val, prev, next) {
        this.val = (val === undefined ? 0 : val);
        this.prev = (prev === undefined ? null : prev);
        this.next = (next === undefined ? null : next);
    }
}

/**
 * @param {string} homepage
 */
const BrowserHistory = function (homepage) {
    this.cur = new DoubleListNode(homepage);
};

/**
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function (url) {
    this.cur.next = new DoubleListNode(url, this.cur);
    this.cur = this.cur.next;
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function (steps) {
    while (steps > 0 && this.cur.prev) {
        this.cur = this.cur.prev;
        steps -= 1;
    }
    return this.cur.val;
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function (steps) {
    while (steps > 0 && this.cur.next) {
        this.cur = this.cur.next;
        steps -= 1;
    }
    return this.cur.val;
};

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */

module.exports = { BrowserHistory };
