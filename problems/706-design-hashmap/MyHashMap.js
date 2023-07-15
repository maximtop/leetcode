const ListNode = function (key = -1, value = -1, next = null) {
    this.key = key;
    this.val = value;
    this.next = next;
};

const MyHashMap = function () {
    // eslint-disable-next-line no-unused-vars
    this.storage = new Array(1000).fill(null).map((_) => new ListNode());
};

MyHashMap.prototype.hash = function (key) {
    return key % this.storage.length;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function (key, value) {
    let cur = this.storage[this.hash(key)];
    while (cur.next) {
        if (cur.next.key === key) {
            cur.next.val = value;
            return;
        }
        cur = cur.next;
    }
    cur.next = new ListNode(key, value);
};

/**
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function (key) {
    let cur = this.storage[this.hash(key)];
    while (cur) {
        if (cur.key === key) {
            return cur.val;
        }
        cur = cur.next;
    }
    return -1;
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function (key) {
    let cur = this.storage[this.hash(key)];
    while (cur && cur.next) {
        if (cur.next.key === key) {
            cur.next = cur.next.next;
            return;
        }
        cur = cur.next;
    }
};

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */

module.exports = { MyHashMap };
