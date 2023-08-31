const { TreeNode } = require('../helpers/tree/TreeNode');
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
const allPossibleFBT = function (n) {
    const cache = {
        0: [],
        1: [new TreeNode()],
    };
    const backtrack = (n) => {
        const cached = cache[n];
        if (cached) {
            return cached;
        }

        const res = [];
        for (let l = 0; l < n; l += 1) {
            const r = n - 1 - l;
            const leftTrees = backtrack(l);
            const rightTrees = backtrack(r);
            for (const leftTree of leftTrees) {
                for (const rightTree of rightTrees) {
                    res.push(new TreeNode(0, leftTree, rightTree));
                }
            }
        }
        cache[n] = res;
        return res;
    };

    return backtrack(n);
};

module.exports = { allPossibleFBT };
