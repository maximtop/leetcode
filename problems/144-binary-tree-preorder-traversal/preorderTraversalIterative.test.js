const { preorderTraversal } = require('./preorderTraversalIterative');
const { TreeNode } = require('../helpers/tree/TreeNode');

describe('preorderTraversalIterative', () => {
    it('traverses binary tree in preorder way', () => {
        const tree = new TreeNode(1, null, new TreeNode(2, new TreeNode(3)));
        expect(preorderTraversal(tree)).toEqual([1, 2, 3]);
    });
});
