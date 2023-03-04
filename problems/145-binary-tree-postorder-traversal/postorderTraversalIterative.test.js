const { TreeNode } = require('../helpers/tree/TreeNode');
const { postorderTraversalIterative } = require('./postorderTraversalIterative');

describe('postorderTraversal', () => {
    it('traverses first all left node, then right, and then root', () => {
        const tree = new TreeNode(1, null, new TreeNode(2, new TreeNode(3)));
        expect(postorderTraversalIterative(tree)).toEqual([3, 2, 1]);
    });
});
