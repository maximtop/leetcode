const { TreeNode } = require('../helpers/tree/TreeNode');
const { minDiffInBST } = require('./minDiffInBST');

describe('minDiffInBST', () => {
    it('finds min diff', () => {
        const tree = new TreeNode(4, new TreeNode(2, new TreeNode(1), new TreeNode(3)), new TreeNode(6));
        expect(minDiffInBST(tree)).toBe(1);
    });
});
