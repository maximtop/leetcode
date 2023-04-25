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
 * @return {number[]}
 */
const rightSideView = function (root) {
    if (!root) {
        return [];
    }

    // Initialize the BFS queue and the result array
    const queue = [root];
    const rightSideNodes = [];

    // Perform BFS
    while (queue.length > 0) {
        const currentLevelSize = queue.length;
        let currentNode;

        // Iterate over all nodes at the current tree level
        for (let i = 0; i < currentLevelSize; i += 1) {
            currentNode = queue.shift();

            if (currentNode.left) {
                queue.push(currentNode.left);
            }

            if (currentNode.right) {
                queue.push(currentNode.right);
            }
        }

        // The last node processed in the current level will be the rightmost node
        rightSideNodes.push(currentNode.val);
    }

    return rightSideNodes;
};

module.exports = { rightSideView };
