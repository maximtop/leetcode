/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
const carFleet = function (target, position, speed) {
    const pairs = position.map((p, i) => {
        return [p, speed[i]];
    }).sort((a, b) => b[0] - a[0]);

    const stack = [];
    for (const pair of pairs) {
        const time = (target - pair[0]) / pair[1];
        stack.push(time);
        if (stack.length >= 2 && stack.at(-1) <= stack.at(-2)) {
            stack.pop();
        }
    }
    return stack.length;
};

module.exports = { carFleet };
