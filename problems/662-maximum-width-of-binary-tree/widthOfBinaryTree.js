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
const widthOfBinaryTree = function (root) {
    const queue = [[root, 1, 0]];

    let prevNum = 1;
    let prevLevel = 0;
    let res = 0;
    const MOD = 2 ** 32 - 1;
    while (queue.length > 0) {
        const [node, num, level] = queue.shift();
        if (level > prevLevel) {
            prevLevel = level;
            prevNum = num;
        }
        res = Math.max(num - prevNum + 1, res);
        if (node.left) {
            queue.push([node.left, (num * 2) % MOD, level + 1]);
        }
        if (node.right) {
            queue.push([node.right, (num * 2 + 1) % MOD, level + 1]);
        }
    }
    return res;
};

module.exports = { widthOfBinaryTree };
