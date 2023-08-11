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
     * @return {string}
     */
    const tree2str = function (root) {
        if (!root) {
            return '';
        }
        let res = String(root.val);
        const left = tree2str(root.left);
        const right = tree2str(root.right);
        if (left) {
            res += `(${left})`;
        }
        if (right) {
            if (!left) {
                res += '()';
            }
            res += `(${right})`;
        }
        return res;
    };

module.exports = { tree2str };
