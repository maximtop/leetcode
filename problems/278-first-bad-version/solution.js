/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
const solution = function (isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function (n) {
        let left = 1;
        let right = n;
        while (left < right) {
            const mid = left + Math.floor((right - left) / 2);
            if (isBadVersion(mid) && !isBadVersion(mid - 1)) {
                return mid;
            }
            if (!isBadVersion(mid)) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        if (isBadVersion(left) && !isBadVersion(left - 1)) {
            return left;
        }
        return -1;
    };
};

module.exports = { solution };
