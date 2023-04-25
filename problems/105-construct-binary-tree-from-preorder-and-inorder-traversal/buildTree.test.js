const { buildTree } = require('./buildTree');
const { TreeNode } = require('../helpers/tree/TreeNode');

describe('buildTree', () => {
    it('builds tree from inorder and preorder traversals', () => {
        const preorder = [3, 9, 20, 15, 7];
        const inorder = [9, 3, 15, 20, 7];
        expect(buildTree(preorder, inorder))
            .toEqual(new TreeNode(
                3,
                new TreeNode(9),
                new TreeNode(
                    20,
                    new TreeNode(15),
                    new TreeNode(7),
                ),
            ));
    });
});
