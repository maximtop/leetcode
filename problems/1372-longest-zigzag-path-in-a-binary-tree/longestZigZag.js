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
const longestZigZag = function (root) {
    let max = 0;
    const dfs = (node, toLeft, depth) => {
        if (node === null) {
            return;
        }
        max = Math.max(max, depth);
        if (toLeft) {
            dfs(node.left, false, depth + 1);
            dfs(node.right, true, 1);
        } else {
            dfs(node.right, true, depth + 1);
            dfs(node.left, false, 1);
        }
    };

    dfs(root, true, 0);
    dfs(root, false, 0);
    return max;
};

module.exports = { longestZigZag };
