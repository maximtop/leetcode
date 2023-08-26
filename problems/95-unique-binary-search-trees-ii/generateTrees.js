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
const generateTrees = function (n) {
    const generate = (left, right) => {
        if (left === right) {
            return [new TreeNode(left)];
        }
        if (left > right) {
            return [null];
        }
        const res = [];
        for (let val = left; val < right + 1; val += 1) {
            for (const l of generate(left, val - 1)) {
                for (const r of generate(val + 1, right)) {
                    const tree = new TreeNode(val, l, r);
                    res.push(tree);
                }
            }
        }
        return res;
    };
    return generate(1, n);
};

module.exports = { generateTrees };
