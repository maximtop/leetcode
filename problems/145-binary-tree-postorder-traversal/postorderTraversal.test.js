const { TreeNode } = require('../helpers/tree/TreeNode');
const { postorderTraversal } = require('./postorderTraversal');

describe('postorderTraversal', () => {
    it('traverses first all left node, then right, and then root', () => {
        const tree = new TreeNode(1, null, new TreeNode(2, new TreeNode(3)));
        expect(postorderTraversal(tree)).toEqual([3, 2, 1]);
    });
});
