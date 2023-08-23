/**
 * @param {number} n
 * @return {number}
 */
const numTrees = function (n) {
    // numTrees(0) = 1
    // numTrees(1) = 1
    const numTree = new Array(n + 1).fill(1);
    for (let nodes = 2; nodes < n + 1; nodes += 1) {
        let total = 0;
        for (let root = 1; root < nodes + 1; root += 1) {
            const left = root - 1;
            const right = nodes - root;
            total += numTree[left] * numTree[right];
        }
        numTree[nodes] = total;
    }
    return numTree[n];
};

module.exports = { numTrees };
