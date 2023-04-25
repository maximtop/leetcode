const { isValidBST } = require('./isValidBST');
const { TreeNode } = require('../helpers/tree/TreeNode');

describe('isValidBST', () => {
    it('checks if tree is valid binary search tree', () => {
        const tree = new TreeNode(2, new TreeNode(1), new TreeNode(3));
        expect(isValidBST(tree)).toBe(true);

        const invalidTree = new TreeNode(3, new TreeNode(1), new TreeNode(4, new TreeNode(2), new TreeNode(5)));
        expect(isValidBST(invalidTree)).toBe(false);
    });
});
