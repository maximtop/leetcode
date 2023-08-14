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
const minDiffInBST = function (root) {
    let prev = null;
    let res = Number.POSITIVE_INFINITY;
    const dfs = (node) => {
        if (!node) {
            return;
        }
        dfs(node.left);
        if (prev) {
            res = Math.min(res, node.val - prev.val);
        }
        prev = node;
        dfs(node.right);
    };
    dfs(root);
    return res;
};

module.exports = { minDiffInBST };
