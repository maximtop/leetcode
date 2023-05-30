const { MinPriorityQueue } = require('@datastructures-js/priority-queue');

/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
const isNStraightHand = function (hand, groupSize) {
    if (hand.length % groupSize !== 0) {
        return false;
    }
    const map = {};
    for (let i = 0; i < hand.length; i += 1) {
        const num = hand[i];
        map[num] = (map[num] || 0) + 1;
    }
    const mpq = new MinPriorityQueue();
    for (const key of Object.keys(map)) {
        mpq.enqueue(Number(key), Number(key));
    }
    while (mpq.size() > 0) {
        const min = mpq.front().element;
        for (let i = min; i < min + groupSize; i += 1) {
            if (!map[i]) {
                return false;
            }
            map[i] -= 1;
            if (map[i] === 0) {
                if (mpq.front().element !== i) {
                    return false;
                }
                mpq.dequeue();
            }
        }
    }
    return true;
};

module.exports = { isNStraightHand };
