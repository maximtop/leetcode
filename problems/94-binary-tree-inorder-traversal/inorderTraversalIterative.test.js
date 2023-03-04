const { TreeNode } = require('../helpers/tree/TreeNode');
const { inorderTraversalIterative } = require('./inorderTraversalIterative');

describe('inorderTraversal', () => {
    it('traverses list in order', () => {
        const tree = new TreeNode(1, null, new TreeNode(2, new TreeNode(3)));
        expect(inorderTraversalIterative(tree)).toEqual([1, 3, 2]);
    });
});
