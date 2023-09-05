/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
const openLock = function (deadends, target) {
    if (deadends.includes('0000')) {
        return -1;
    }

    const getChildren = (parent) => {
        const parArray = parent.split('').map((char) => Number(char));
        const res = [];
        for (let i = 0; i < 4; i += 1) {
            const child = [...parArray];
            child[i] = (child[i] + 1) % 10;
            res.push(child.join(''));
            const child2 = [...parArray];
            child2[i] = (child2[i] - 1 + 10) % 10;
            res.push(child2.join(''));
        }
        return res;
    };

    const visited = new Set(deadends);
    const queue = [['0000', 0]];
    while (queue.length > 0) {
        const [parent, turn] = queue.shift();
        if (parent === target) {
            return turn;
        }
        const children = getChildren(parent);
        for (const child of children) {
            if (!visited.has(child)) {
                visited.add(child);
                queue.push([child, turn + 1]);
            }
        }
    }

    return -1;
};

module.exports = { openLock };
