/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
const createCounter = function (init) {
    let counter = init;
    const increment = () => {
        counter += 1;
        return counter;
    };
    const decrement = () => {
        counter -= 1;
        return counter;
    };
    const reset = () => {
        counter = init;
        return counter;
    };
    return {
        increment,
        decrement,
        reset,
    };
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */

module.exports = { createCounter };
