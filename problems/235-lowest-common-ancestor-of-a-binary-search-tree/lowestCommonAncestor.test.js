const { TreeNode } = require('../helpers/tree/TreeNode');
const { lowestCommonAncestor } = require('./lowestCommonAncestor');

describe('lowestCommonAncestor', () => {
    it('should find lowest common ancestor', () => {
        const p = new TreeNode(7, new TreeNode(6), new TreeNode(8));
        const q = new TreeNode(3, new TreeNode(2), new TreeNode(4));
        const tree = new TreeNode(5, q, p);
        expect(lowestCommonAncestor(tree, p, q)).toBe(tree);
    });
});
