// TODO rewrite with hash function and binary tree or linked list
const MyHashSet = function () {
    this.storage = {};
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function (key) {
    this.storage[key] = null;
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function (key) {
    delete this.storage[key];
};

/**
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function (key) {
    return Object.prototype.hasOwnProperty.call(this.storage, key);
};

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */

module.exports = { MyHashSet };
