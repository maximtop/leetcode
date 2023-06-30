/* eslint-disable no-await-in-loop */
/**
 * @param {Function[]} functions
 * @param {number} n
 * @return {Promise<any>}
 */
const promisePool = async function (functions, n) {
    const evaluateNext = async () => {
        if (functions.length === 0) {
            return;
        }
        const fn = functions.shift();
        await fn();
        await evaluateNext();
    };
    const queue = new Array(n).fill().map(evaluateNext);
    await Promise.all(queue);
};

/**
 * const sleep = (t) => new Promise(res => setTimeout(res, t));
 * promisePool([() => sleep(500), () => sleep(400)], 1)
 *   .then(console.log) // After 900ms
 */

module.exports = { promisePool };
