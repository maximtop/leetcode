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
const zigzagLevelOrder = function (root) {
    const res = [];
    let fromLeftToRight = true;
    const stack = [];
    stack.push(root);
    while (stack.length > 0) {
        let nodesToShift = stack.length;
        const curArr = [];
        while (nodesToShift > 0) {
            nodesToShift -= 1;
            const node = stack.shift();
            if (node) {
                stack.push(node.left);
                stack.push(node.right);
                curArr.push(node.val);
            }
        }
        if (curArr.length === 0) {
            continue;
        }
        if (!fromLeftToRight) {
            curArr.reverse();
        }
        res.push(curArr);
        fromLeftToRight = !fromLeftToRight;
    }
    return res;
};

module.exports = { zigzagLevelOrder };
