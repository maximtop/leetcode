const { TreeNode } = require('../helpers/tree/TreeNode');
const { isSameTree } = require('./isSameTree');

describe('isSameTree', () => {
    it('should determine if trees are the same', () => {
        const p = new TreeNode(1, new TreeNode(2));
        const q = new TreeNode(1, null, new TreeNode(2));

        expect(isSameTree(p, q)).toBe(false);
    });
});
