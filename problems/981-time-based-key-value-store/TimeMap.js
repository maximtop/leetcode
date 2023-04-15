const TimeMap = function () {
    this.map = new Map();
};

/**
 * @param {string} key
 * @param {string} value
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function (key, value, timestamp) {
    if (this.map.has(key)) {
        const val = this.map.get(key);
        val.push([value, timestamp]);
    } else {
        this.map.set(key, [[value, timestamp]]);
    }
};

/**
 * @param {string} key
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function (key, timestamp) {
    if (!this.map.has(key)) {
        return '';
    }
    const val = this.map.get(key);

    let start = 0;
    let end = val.length - 1;
    let res = '';
    while (start <= end) {
        const mid = start + Math.floor((end - start) / 2);

        const curVal = val[mid];
        if (curVal[1] <= timestamp) {
            start = mid + 1;
            res = curVal[0];
        } else {
            end = mid - 1;
        }
    }
    return res;
};

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */

module.exports = { TimeMap };
