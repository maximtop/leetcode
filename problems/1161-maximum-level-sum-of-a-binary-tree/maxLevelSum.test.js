const { maxLevelSum } = require('./maxLevelSum');
const { TreeNode } = require('../helpers/tree/TreeNode');

describe('maxLevelSum', () => {
    it('finds max level sum', () => {
        expect(maxLevelSum(new TreeNode(1))).toBe(1);
        expect(maxLevelSum(new TreeNode(1, new TreeNode(-2), new TreeNode(1)))).toBe(1);
        expect(maxLevelSum(new TreeNode(1, new TreeNode(1), new TreeNode(1)))).toBe(2);
    });
});
