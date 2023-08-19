/**
 * @param {Function} fn
 * @return {Function}
 */
const once = function (fn) {
    let executed = false;
    return function (...args) {
        if (!executed) {
            executed = true;
            return fn(...args);
        }
    };
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */


module.exports = { once };
