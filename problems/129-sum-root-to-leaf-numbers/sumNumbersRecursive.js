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
 * @return {number}
 */
const sumNumbers = function (root) {
    let sum = 0;
    const preorder = (root, current) => {
        if (root === null) {
            return;
        }

        current = current * 10 + root.val;
        if (root.left === null && root.right === null) {
            sum += current;
        }

        preorder(root.left, current);
        preorder(root.right, current);
    };

    preorder(root, 0);
    return sum;
};

module.exports = { sumNumbers };
