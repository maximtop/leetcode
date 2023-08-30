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
const findBottomLeftValue = function (root) {
    const queue = [root];
    let bottomLeft = root;
    while (queue.length !== 0) {
        const nodes = queue.splice(0);
        nodes.forEach((node) => {
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        });
        [bottomLeft] = nodes;
    }
    return bottomLeft.val;
};

module.exports = { findBottomLeftValue };
