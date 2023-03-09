const { TreeNode } = require('../helpers/tree/TreeNode');
const { hasPathSum } = require('./hasPathSum');

describe('hasPathSum', () => {
    it('checks if tree has path sum', () => {
        const tree = new TreeNode(1, new TreeNode(2), new TreeNode(3, new TreeNode(4)));
        expect(hasPathSum(tree, 8)).toBeTruthy();
    });
});
