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
const rob = function (root) {
    // [withRoot, withoutRoot]
    const dfs = (root) => {
        if (!root) {
            return [0, 0];
        }

        const leftPair = dfs(root.left);
        const rightPair = dfs(root.right);

        const withRoot = root.val + leftPair[1] + rightPair[1];
        const withoutRoot = Math.max(...leftPair) + Math.max(...rightPair);
        return [withRoot, withoutRoot];
    };

    return Math.max(...dfs(root));
};

module.exports = { rob };
