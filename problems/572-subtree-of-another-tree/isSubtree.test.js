const { TreeNode } = require('../helpers/tree/TreeNode');
const { isSubtree } = require('./isSubtree');

describe('isSubtree', () => {
    it('checks if tree is subtree of another tree', () => {
        const tree = new TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(5)), new TreeNode(3));
        const subTree = new TreeNode(2, new TreeNode(4), new TreeNode(5));
        expect(isSubtree(tree, subTree)).toBeTruthy();
    });
});
