/**
 * @param {string} dominoes
 * @return {string}
 */
const pushDominoes = function (dominoes) {
    const dom = dominoes.split('');
    const queue = [];
    for (let i = 0; i < dom.length; i += 1) {
        const domino = dom[i];
        if (domino !== '.') {
            queue.push([i, domino]);
        }
    }
    while (queue.length) {
        const [i, domino] = queue.shift();
        if (domino === 'L') {
            if (i > 0 && dom[i - 1] === '.') {
                queue.push([i - 1, 'L']);
                dom[i - 1] = 'L';
            }
        } else if (domino === 'R') {
            if (i + 1 < dom.length && dom[i + 1] === '.') {
                if (i + 2 < dom.length && dom[i + 2] === 'L') {
                    queue.shift();
                } else {
                    queue.push([i + 1, 'R']);
                    dom[i + 1] = 'R';
                }
            }
        }
    }
    return dom.join('');
};

module.exports = { pushDominoes };
