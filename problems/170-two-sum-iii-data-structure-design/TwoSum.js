const TwoSum = function () {
    this.map = new Map();
};

/**
 * @param {number} number
 * @return {void}
 */
TwoSum.prototype.add = function (number) {
    const existing = this.map.get(number);
    if (existing) {
        this.map.set(number, existing + 1);
    } else {
        this.map.set(number, 1);
    }
};

/**
 * @param {number} value
 * @return {boolean}
 */
TwoSum.prototype.find = function (value) {
    const keys = [...this.map.keys()];

    for (let i = 0; i < keys.length; i += 1) {
        const key = keys[i];
        const remainder = value - key;

        if (remainder !== key) {
            if (this.map.has(remainder)) {
                return true;
            }
        } else if (this.map.get(remainder) > 1) {
            return true;
        }
    }

    return false;
};

/**
 * Your TwoSum object will be instantiated and called as such:
 * var obj = new TwoSum()
 * obj.add(number)
 * var param_2 = obj.find(value)
 */
module.exports = { TwoSum };
