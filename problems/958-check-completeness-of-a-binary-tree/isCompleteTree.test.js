const { TreeNode } = require('../helpers/tree/TreeNode');
const { isCompleteTree } = require('./isCompleteTree');

describe('isCompleteTree', () => {
    it('checks if tree is complete', () => {
        const tree = new TreeNode(1, new TreeNode(2));
        expect(isCompleteTree(tree)).toBe(true);
        const tree2 = new TreeNode(1, null, new TreeNode(2));
        expect(isCompleteTree(tree2)).toBe(false);
    });
});
