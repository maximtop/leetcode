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
 * @return {boolean}
 */
const isValidBST = function (root) {
    const dfs = (root, leftBoundary, rightBoundary) => {
        if (!root) {
            return true;
        }

        const isValid = root.val > leftBoundary && root.val < rightBoundary;

        return isValid
            && dfs(root.left, leftBoundary, root.val)
            && dfs(root.right, root.val, rightBoundary);
    };

    return dfs(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
};

module.exports = { isValidBST };
