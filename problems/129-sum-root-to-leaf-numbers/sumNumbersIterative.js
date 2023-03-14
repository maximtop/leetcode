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
const sumNumbers = function (root) {
    const stack = [];
    let rootToLeafSums = 0;
    stack.push([root, 0]);
    while (stack.length > 0) {
        const curr = stack.pop();
        const currNode = curr[0];
        let currNum = curr[1];
        if (currNode !== null) {
            currNum = currNum * 10 + currNode.val;
            if (currNode.left === null && currNode.right === null) {
                rootToLeafSums += currNum;
            }
            stack.push([currNode.left, currNum]);
            stack.push([currNode.right, currNum]);
        }
    }
    return rootToLeafSums;
};

module.exports = { sumNumbers };
