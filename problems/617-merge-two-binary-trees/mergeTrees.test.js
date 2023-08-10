const { TreeNode } = require('../helpers/tree/TreeNode');
const { mergeTrees } = require('./mergeTrees');

describe('mergeTrees', () => {
    it('merges trees', () => {
        const tree1 = new TreeNode(1, new TreeNode(2));
        const tree2 = new TreeNode(2, null, new TreeNode(3));
        expect(mergeTrees(tree1, tree2)).toEqual(new TreeNode(3, new TreeNode(2), new TreeNode(3)));
    });
});
