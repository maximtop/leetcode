const { buildTree } = require('./buildTree');
const { TreeNode } = require('../helpers/tree/TreeNode');

describe('buildTree', () => {
    it('builds tree from inorder and postorder arrays', () => {
        const inorder = [9, 3, 15, 20, 7];
        const postorder = [9, 15, 7, 20, 3];
        expect(buildTree(inorder, postorder)).toEqual(new TreeNode(
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
