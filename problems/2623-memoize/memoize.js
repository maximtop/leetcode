/**
 * @param {Function} fn
 */
function memoize(fn) {
    const map = new Map();
    return function (...args) {
        const str = JSON.stringify(args);
        if (map.has(str)) {
            return map.get(str);
        }
        const res = fn(...args);
        map.set(str, res);
        return res;
    };
}

/**
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1
 */
module.exports = { memoize };
