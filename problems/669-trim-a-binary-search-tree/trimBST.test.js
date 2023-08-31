const { trimBST } = require('./trimBST');
const { TreeNode } = require('../helpers/tree/TreeNode');

describe('trimBST', () => {
    it('trims bst', () => {
        expect(trimBST(new TreeNode(2, new TreeNode(1), new TreeNode(3)), 2, 3))
            .toEqual(new TreeNode(2, null, new TreeNode(3)));
    });
});
