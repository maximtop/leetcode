const { TreeNode } = require('../helpers/tree/TreeNode');
const { findDuplicateSubtrees } = require('./findDuplicateSubtrees');

describe('findDuplicateSubtree', () => {
    it('finds duplicate subtrees', () => {
        const tree = new TreeNode(
            1,
            new TreeNode(2, new TreeNode(4)),
            new TreeNode(
                3,
                new TreeNode(2, new TreeNode(4)),
                new TreeNode(4),
            ),
        );
        expect(findDuplicateSubtrees(tree)).toEqual([new TreeNode(4), new TreeNode(2, new TreeNode(4))]);
    });
});
