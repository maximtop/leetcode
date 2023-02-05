const Logger = function () {
    this.map = {};
};

/**
 * @param {number} timestamp
 * @param {string} message
 * @return {boolean}
 */
Logger.prototype.shouldPrintMessage = function (timestamp, message) {
    const lastTimestamp = this.map[message];

    if (lastTimestamp === undefined) {
        this.map[message] = timestamp;
        return true;
    }

    if (lastTimestamp <= timestamp - 10) {
        this.map[message] = timestamp;
        return true;
    }

    return false;
};

/**
 * Your Logger object will be instantiated and called as such:
 * var obj = new Logger()
 * var param_1 = obj.shouldPrintMessage(timestamp,message)
 */

module.exports = { Logger };
