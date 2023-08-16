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
 * @return {TreeNode[]}
 */
const findDuplicateSubtrees = function (root) {
    const map = new Map();
    const dfs = (root) => {
        if (!root) {
            return 'n';
        }
        const left = dfs(root.left);
        const right = dfs(root.right);
        const serialized = `${root.val},${left},${right}`;
        if (!map.has(serialized)) {
            map.set(serialized, [root]);
        } else {
            const arr = map.get(serialized);
            arr.push(root);
        }
        return serialized;
    };
    dfs(root);
    const res = [];
    for (const arr of map.values()) {
        if (arr.length > 1) {
            res.push(arr[0]);
        }
    }
    return res;
};

module.exports = { findDuplicateSubtrees };
