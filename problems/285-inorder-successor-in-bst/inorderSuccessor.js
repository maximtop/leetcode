/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @return {TreeNode}
 */
const inorderSuccessor = function (root, p) {
    let successor = null;
    while (root !== null) {
        if (root.val <= p.val) {
            root = root.right;
        } else {
            successor = root;
            root = root.left;
        }
    }
    return successor;
};

module.exports = { inorderSuccessor };
