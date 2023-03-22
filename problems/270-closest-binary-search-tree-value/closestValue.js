/* eslint-disable prefer-destructuring */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {number}
 */
const closestValue = function (root, target) {
    let val = root.val;
    let closest = val;
    while (root !== null) {
        val = root.val;
        closest = Math.abs(val - target) < Math.abs(closest - target) ? val : closest;
        root = target < val ? root.left : root.right;
    }
    return closest;
};

module.exports = { closestValue };
