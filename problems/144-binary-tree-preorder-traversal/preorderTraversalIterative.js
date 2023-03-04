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
 * @return {number[]}
 */
const preorderTraversal = function (root) {
    const stack = [];

    const ans = [];
    stack.push(root);
    while (stack.length > 0) {
        const node = stack.pop();
        if (node !== null) {
            ans.push(node.val);
            stack.push(node.right);
            stack.push(node.left);
        }
    }
    return ans;
};

module.exports = { preorderTraversal };
