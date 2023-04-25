const { TreeNode } = require('../helpers/tree/TreeNode');
const { isBalanced } = require('./isBalanced');

describe('isBalanced', () => {
    it('detects if tree is height balanced', () => {
        const tree = new TreeNode(
            1,
            new TreeNode(2),
            new TreeNode(
                3,
                new TreeNode(4),
                new TreeNode(5),
            ),
        );
        expect(isBalanced(tree)).toBe(true);

        const unbalancedTree = new TreeNode(1, new TreeNode(2, new TreeNode(3)));
        expect(isBalanced(unbalancedTree)).toBe(false);
    });
});
