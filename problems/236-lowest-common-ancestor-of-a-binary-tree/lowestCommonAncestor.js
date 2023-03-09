const hasNode = (root, node) => {
    if (root === null) {
        return false;
    }

    if (root.val === node.val) {
        return true;
    }

    return hasNode(root.left, node) || hasNode(root.right, node);
};

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
 * @param {TreeNode} q
 * @return {TreeNode}
 */
const lowestCommonAncestorNaive = function (root, p, q) {
    let curr = root;
    while (hasNode(curr, p) && hasNode(curr, q)) {
        if (hasNode(curr.left, p) && hasNode(curr.left, q)) {
            curr = curr.left;
        } else if (hasNode(curr.right, p) && hasNode(curr.right, q)) {
            curr = curr.right;
        } else {
            return curr;
        }
    }
    return null;
};

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
 * @param {TreeNode} q
 * @return {TreeNode}
 */
const lowestCommonAncestor = function (root, p, q) {
    if (root === null || root === p || root === q) {
        return root;
    }

    const lcaLeft = lowestCommonAncestor(root.left, p, q);
    const lcaRight = lowestCommonAncestor(root.right, p, q);

    return lcaLeft && lcaRight ? root : lcaLeft || lcaRight;
};

module.exports = { lowestCommonAncestorNaive, hasNode, lowestCommonAncestor };
