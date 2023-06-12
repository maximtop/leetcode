/**
 * @param {number} length
 */
const SnapshotArray = function (length) {
    this.arr = Array(length).fill(0);
    this.map = new Map();
    this.snapId = 0;
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
SnapshotArray.prototype.set = function (index, val) {
    this.arr[index] = val;
};

/**
 * @return {number}
 */
SnapshotArray.prototype.snap = function () {
    const id = this.snapId;
    this.map.set(id, [...this.arr]);
    this.snapId += 1;
    return id;
};

/**
 * @param {number} index
 * @param {number} snap_id
 * @return {number}
 */
SnapshotArray.prototype.get = function (index, snapId) {
    const arr = this.map.get(snapId);
    return arr[index];
};

/**
 * Your SnapshotArray object will be instantiated and called as such:
 * var obj = new SnapshotArray(length)
 * obj.set(index,val)
 * var param_2 = obj.snap()
 * var param_3 = obj.get(index,snap_id)
 */

module.exports = { SnapshotArray };
