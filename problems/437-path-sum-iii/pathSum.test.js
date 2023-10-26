const { TreeNode } = require('../helpers/tree/TreeNode');
const { pathSum } = require('./pathSum');

describe('pathSum', () => {
    it('finds count of path sum equal to target', () => {
        const tree = new TreeNode(
            10,
            new TreeNode(
                5,
                new TreeNode(3, new TreeNode(3), new TreeNode(-2)),
                new TreeNode(2, null, new TreeNode(1)),
            ),
            new TreeNode(
                3,
                null,
                new TreeNode(-3, null, new TreeNode(11)),
            ),
        );
        expect(pathSum(tree, 8)).toBe(3);
    });
});
