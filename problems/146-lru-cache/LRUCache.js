/* eslint-disable prefer-destructuring */
function ListNode(key, val, prev, next) {
    this.key = key || 0;
    this.val = val || 0;
    this.prev = prev || null;
    this.next = next || null;
}

/**
 * @param {number} capacity
 */
const LRUCache = function (capacity) {
    this.capacity = capacity;
    this.leftDummy = new ListNode();
    this.rightDummy = new ListNode();
    this.leftDummy.next = this.rightDummy;
    this.rightDummy.prev = this.leftDummy;
    this.map = new Map();
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    const node = this.map.get(key);
    if (!node) {
        return -1;
    }

    const prev = node.prev;
    const next = node.next;
    prev.next = next;
    next.prev = prev;

    const tempPrev = this.rightDummy.prev;
    this.rightDummy.prev = node;
    node.next = this.rightDummy;
    tempPrev.next = node;
    node.prev = tempPrev;

    return node.val;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    const node = this.map.get(key);
    if (this.capacity === 0 || node) {
        const nodeToRemove = node || this.leftDummy.next;

        const prev = nodeToRemove.prev;
        const next = nodeToRemove.next;

        prev.next = next;
        next.prev = prev;

        this.map.delete(nodeToRemove.key);
        this.capacity += 1;
    }

    const cur = new ListNode(key, value);
    const prev = this.rightDummy.prev;
    prev.next = cur;
    cur.prev = prev;
    cur.next = this.rightDummy;
    this.rightDummy.prev = cur;
    this.map.set(key, cur);
    this.capacity -= 1;
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

module.exports = { LRUCache };
