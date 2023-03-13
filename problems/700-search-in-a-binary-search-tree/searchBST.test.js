const { TreeNode } = require('../helpers/tree/TreeNode');
const { searchBST } = require('./searchBST');

describe('searchBST', () => {
    it('finds value in binary tree', () => {
        const tree = new TreeNode(1, new TreeNode(2), new TreeNode(3, new TreeNode(4)));
        expect(searchBST(tree, 3)).toEqual(new TreeNode(3, new TreeNode(4)));
    });
});
