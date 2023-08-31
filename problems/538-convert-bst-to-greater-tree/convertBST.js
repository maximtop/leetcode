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
 * @return {TreeNode}
 */
const convertBST = function (root) {
    let curSum = 0;
    const dfs = (node) => {
        if (!node) {
            return;
        }
        dfs(node.right);
        const tmp = node.val;
        node.val += curSum;
        curSum += tmp;
        dfs(node.left);
    };
    dfs(root);
    return root;
};

module.exports = { convertBST };
