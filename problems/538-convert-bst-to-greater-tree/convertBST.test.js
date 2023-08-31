const { convertBST } = require('./convertBST');
const { TreeNode } = require('../helpers/tree/TreeNode');

describe('convertBST', () => {
    it('converts tree', () => {
        const tree = new TreeNode(2, new TreeNode(1), new TreeNode(3));
        const newTree = convertBST(tree);
        expect(newTree).toEqual(new TreeNode(5, new TreeNode(6), new TreeNode(3)));
    });
});
