/**
 * @param {number[]} fruits
 * @return {number}
 */
const totalFruit = function (fruits) {
    const map = new Map();
    let max = 0;
    let start = 0;
    for (let end = 0; end < fruits.length; end += 1) {
        const fruit = fruits[end];
        map.set(fruit, (map.get(fruit) || 0) + 1);
        while (map.size > 2) {
            const startFruit = fruits[start];
            map.set(startFruit, map.get(startFruit) - 1);
            if (map.get(startFruit) === 0) {
                map.delete(startFruit);
            }
            start += 1;
        }
        max = Math.max((end - start) + 1, max);
    }
    return max;
};

module.exports = { totalFruit };
