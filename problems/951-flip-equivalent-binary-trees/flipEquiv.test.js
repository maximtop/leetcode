const { TreeNode } = require('../helpers/tree/TreeNode');
const { flipEquiv } = require('./flipEquiv');

describe('flipEquiv', () => {
    it('checks if trees are equivalent', () => {
        const tree1 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
        const tree2 = new TreeNode(1, new TreeNode(3), new TreeNode(2));
        expect(flipEquiv(tree1, tree2)).toBeTruthy();
    });
});
