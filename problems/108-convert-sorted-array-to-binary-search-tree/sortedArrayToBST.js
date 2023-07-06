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
 * @param {number[]} nums
 * @return {TreeNode}
 */
const sortedArrayToBST = function (nums) {
    if (nums.length === 0) {
        return null;
    }
    const middleIdx = Math.floor(nums.length / 2);
    const tree = new TreeNode(nums[middleIdx]);
    tree.left = sortedArrayToBST(nums.slice(0, middleIdx));
    tree.right = sortedArrayToBST(nums.slice(middleIdx + 1));
    return tree;
};

module.exports = { sortedArrayToBST };
