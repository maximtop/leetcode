/**
 * @param {string} s
 * @param {string} p
 * @param {number[]} removable
 * @return {number}
 */
const maximumRemovals = function (s, p, removable) {
    const isSubseq = (str, subseq, removed) => {
        let i = 0;
        let j = 0;
        while (i < str.length && j < subseq.length) {
            if (str[i] === subseq[j] && !removed.has(i)) {
                j += 1;
            }
            i += 1;
        }
        return j === subseq.length;
    };

    let l = 0;
    let r = removable.length - 1;
    let result = 0;
    while (l <= r) {
        const mid = Math.floor((l + r) / 2);
        const removed = new Set(removable.slice(0, mid + 1));
        if (isSubseq(s, p, removed)) {
            l = mid + 1;
            result = mid + 1;
        } else {
            r = mid - 1;
        }
    }

    return result;
};

module.exports = { maximumRemovals };
