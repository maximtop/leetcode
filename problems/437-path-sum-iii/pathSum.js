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
 * @param {number} targetSum
 * @return {number}
 */
const pathSum = function (root, targetSum) {
    const prefixSumMap = {};
    let count = 0;
    const dfs = (root, currSum) => {
        if (!root) {
            return;
        }
        currSum += root.val;
        if (currSum === targetSum) {
            count += 1;
        }
        count += prefixSumMap[currSum - targetSum] ?? 0;
        prefixSumMap[currSum] ??= 0;
        prefixSumMap[currSum] += 1;
        dfs(root.left, currSum);
        dfs(root.right, currSum);
        prefixSumMap[currSum] -= 1;
    };
    dfs(root, 0);
    return count;
};

module.exports = { pathSum };
