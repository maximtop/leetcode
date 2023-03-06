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
const isSymmetric = function (root) {
    if (root === null) {
        return false;
    }

    const areMirrored = (leftNode, rightNode) => {
        if (leftNode === null || rightNode === null) {
            return leftNode === rightNode;
        }

        if (leftNode.val === rightNode.val
            && areMirrored(leftNode.left, rightNode.right)
            && areMirrored(leftNode.right, rightNode.left)) {
            return true;
        }
        return false;
    };

    return areMirrored(root.left, root.right);
};

module.exports = { isSymmetric };
