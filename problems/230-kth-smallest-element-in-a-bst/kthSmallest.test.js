const { TreeNode } = require('../helpers/tree/TreeNode');
const { kthSmallest } = require('./kthSmallest');

describe('kthSmallest', () => {
    it('finds smallest in the binary search tree', () => {
        const tree = new TreeNode(3, new TreeNode(1, null, new TreeNode(2)), new TreeNode(4));
        expect(kthSmallest(tree, 2)).toBe(2);
        expect(kthSmallest(tree, 1)).toBe(1);
    });
});
