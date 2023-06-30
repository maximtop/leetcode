const { insertIntoBST } = require('./insertIntoBST');
const { TreeNode } = require('../helpers/tree/TreeNode');

describe('insertIntoBST', () => {
    it('inserts smaller nodes to the left', () => {
        const tree = new TreeNode(2);
        expect(insertIntoBST(tree, 1)).toEqual(new TreeNode(2, new TreeNode(1)));
    });
    it('inserts bigger nodes to the right', () => {
        const tree = new TreeNode(2, new TreeNode(1), new TreeNode(3));
        expect(insertIntoBST(tree, 4))
            .toEqual(new TreeNode(2, new TreeNode(1), new TreeNode(3, null, new TreeNode(4))));
    });
});
