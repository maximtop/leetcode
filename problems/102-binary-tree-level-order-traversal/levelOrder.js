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
 * @return {number[][]}
 */
const levelOrder = function (root) {
    const queue = [];
    const ans = [];
    if (root !== null) {
        queue.push(root);
    }

    while (queue.length > 0) {
        const levelLength = queue.length;
        const row = [];
        for (let i = 0; i < levelLength; i += 1) {
            const node = queue.shift();
            row.push(node.val);
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
        ans.push(row);
    }

    return ans;
};

module.exports = { levelOrder };
