const { generateTrees } = require('./generateTrees');
const { TreeNode } = require('../helpers/tree/TreeNode');

describe('generateTree', () => {
    it('generates all possible BST', () => {
        expect(generateTrees(1)).toEqual([new TreeNode(1)]);
        expect(generateTrees(2)).toEqual([new TreeNode(1, null, new TreeNode(2)), new TreeNode(2, new TreeNode(1))]);
        expect(generateTrees(3)).toEqual([
            new TreeNode(1, null, new TreeNode(2, null, new TreeNode(3))),
            new TreeNode(1, null, new TreeNode(3, new TreeNode(2))),
            new TreeNode(2, new TreeNode(1), new TreeNode(3)),
            new TreeNode(3, new TreeNode(1, null, new TreeNode(2))),
            new TreeNode(3, new TreeNode(2, new TreeNode(1))),
        ]);
    });
});
