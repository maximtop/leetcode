const { widthOfBinaryTree } = require('./widthOfBinaryTree');
const { TreeNode } = require('../helpers/tree/TreeNode');

describe('widthOfBinaryTree', () => {
    it('finds width of binary tree', () => {
        expect(widthOfBinaryTree(new TreeNode(1))).toBe(1);
        expect(widthOfBinaryTree(new TreeNode(
            1,
            new TreeNode(
                3,
                new TreeNode(5),
                new TreeNode(3),
            ),
            new TreeNode(
                2,
                null,
                new TreeNode(9),
            ),
        ))).toBe(4);
    });
});
