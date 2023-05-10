const { Node } = require('../helpers/graph/Node');
/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
const cloneGraph = function (node) {
    const oldToNew = new Map();

    if (node === null) {
        return null;
    }

    const dfs = (node) => {
        if (oldToNew.has(node)) {
            return oldToNew.get(node);
        }
        const copy = new Node(node.val);
        oldToNew.set(node, copy);
        for (const neighbor of node.neighbors) {
            copy.neighbors.push(dfs(neighbor));
        }
        return copy;
    };

    return dfs(node);
};

module.exports = { cloneGraph };
