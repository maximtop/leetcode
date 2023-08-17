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
const isCompleteTree = function (root) {
    const queue = [];
    queue.push(root);
    let meetNull = false;
    while (queue.length > 0) {
        const node = queue.shift();
        if (node !== null && meetNull) {
            return false;
        }
        if (node === null) {
            meetNull = true;
            continue;
        }
        queue.push(node.left);
        queue.push(node.right);
    }

    return true;
};

module.exports = { isCompleteTree };
