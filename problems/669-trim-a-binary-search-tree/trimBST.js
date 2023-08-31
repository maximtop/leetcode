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
 * @param {number} low
 * @param {number} high
 * @return {TreeNode}
 */
const trimBST = function (root, low, high) {
    if (!root) {
        return root;
    }
    if (root.val > high) { // means that all right values be bigger than high too
        return trimBST(root.left, low, high);
    }
    if (root.val < low) { // means that all left values be smaller than low too
        return trimBST(root.right, low, high);
    }
    root.left = trimBST(root.left, low, high);
    root.right = trimBST(root.right, low, high);
    return root;
};

module.exports = { trimBST };
