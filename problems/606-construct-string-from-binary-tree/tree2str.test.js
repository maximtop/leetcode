const { TreeNode } = require('../helpers/tree/TreeNode');
const { tree2str } = require('./tree2str');

describe('tree2str', () => {
    it('returns str from the tree', () => {
        const tree = new TreeNode(1, new TreeNode(2), new TreeNode(3));
        expect(tree2str(tree)).toBe('1(2)(3)');
    });
    it('return empty brackets if left is empty', () => {
        const tree = new TreeNode(1, null, new TreeNode(3));
        expect(tree2str(tree)).toBe('1()(3)');
    });
    it('does not returns empty brackets for the right node', () => {
        const tree = new TreeNode(1, new TreeNode(2));
        expect(tree2str(tree)).toBe('1(2)');
    });
});
