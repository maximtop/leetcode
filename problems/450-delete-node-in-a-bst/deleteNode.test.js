const { deleteNode } = require('./deleteNode');
const { TreeNode } = require('../helpers/tree/TreeNode');

describe('deleteNode', () => {
    it('removes node from empty tree', () => {
        const tree = null;
        expect(deleteNode(tree, 10)).toBe(null);
    });

    it('returns same tree if key not found', () => {
        const tree = new TreeNode(1);
        expect(deleteNode(tree, 10)).toEqual(tree);
    });

    it('removes nodes', () => {
        const tree = new TreeNode(2, new TreeNode(1), new TreeNode(3, new TreeNode(4)));
        expect(deleteNode(tree, 3)).toEqual(new TreeNode(2, new TreeNode(1), new TreeNode(4)));
    });
});
