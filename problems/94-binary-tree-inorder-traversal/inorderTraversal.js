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
const inorderTraversal = function (root) {
    const helper = (node, ans) => {
        if (node === null) {
            return ans;
        }
        helper(node.left, ans);
        ans.push(node.val);
        helper(node.right, ans);
        return ans;
    };

    const ans = helper(root, []);
    return ans;
};

module.exports = { inorderTraversal };
