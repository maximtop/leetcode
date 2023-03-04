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
const postorderTraversalIterative = function (root) {
    const stack = [];
    const ans = [];
    let curr = root;
    if (root === null) {
        return ans;
    }

    stack.push(root);
    while (stack.length > 0) {
        curr = stack.pop();
        ans.unshift(curr.val);
        if (curr.left !== null) {
            stack.push(curr.left);
        }
        if (curr.right !== null) {
            stack.push(curr.right);
        }
    }

    return ans;
};

module.exports = { postorderTraversalIterative };
