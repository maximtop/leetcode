const { TreeNode } = require('../helpers/tree/TreeNode');
const { isSymmetric } = require('./isSymmetric');

describe('isSymmetric', () => {
    it('detects if tree is symmetric', () => {
        const tree = new TreeNode(
            1,
            new TreeNode(2, new TreeNode(3), new TreeNode(4)),
            new TreeNode(2, new TreeNode(4), new TreeNode(3)),
        );
        expect(isSymmetric(tree)).toBe(true);
    });

    it('works', () => {
        const tree = new TreeNode(
            1,
            new TreeNode(2, new TreeNode(2)),
            new TreeNode(2, new TreeNode(2)),
        );

        expect(isSymmetric(tree)).toBe(false);
    });
});
