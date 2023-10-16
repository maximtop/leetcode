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
const maxLevelSum = function (root) {
    const queue = [root];
    let maxSum = root.val;
    let maxLevel = 1;
    let curLevel = 1;
    while (queue.length > 0) {
        const levelLength = queue.length;
        let sum = 0;
        for (let i = 0; i < levelLength; i += 1) {
            const node = queue.shift();
            sum += node.val;
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
        if (sum > maxSum) {
            maxLevel = curLevel;
            maxSum = sum;
        }
        curLevel += 1;
    }
    return maxLevel;
};

module.exports = { maxLevelSum };
