/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
const findRestaurant = function (list1, list2) {
    const map1 = {};
    for (let i = 0; i < list1.length; i += 1) {
        map1[list1[i]] = i;
    }

    const map2 = {};
    let smallest = null;
    for (let i = 0; i < list2.length; i += 1) {
        const title = list2[i];
        // eslint-disable-next-line no-prototype-builtins
        if (map1.hasOwnProperty(title)) {
            const curSum = map1[title] + i;
            if (smallest > curSum || smallest === null) {
                smallest = curSum;
            }
            if (map2[curSum]) {
                map2[curSum].push(title);
            } else {
                map2[curSum] = [title];
            }
        }
    }
    return map2[smallest];
};

module.exports = { findRestaurant };
