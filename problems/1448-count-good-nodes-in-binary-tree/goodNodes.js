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
const goodNodes = function (root) {
    const dfs = (root, max) => {
        if (!root) {
            return 0;
        }

        let res = 0;
        if (root.val >= max) {
            res += 1;
            max = root.val;
        }

        res += dfs(root.left, max);
        res += dfs(root.right, max);
        return res;
    };

    return dfs(root, root.val);
};

module.exports = { goodNodes };
