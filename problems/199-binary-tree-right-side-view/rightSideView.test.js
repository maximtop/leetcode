const { rightSideView } = require('./rightSideView');
const { TreeNode } = require('../helpers/tree/TreeNode');

describe('rightSideView', () => {
    it('returns all right nodes', () => {
        const tree = new TreeNode(
            1,
            new TreeNode(
                2,
                new TreeNode(3),
            ),
            new TreeNode(
                4,
                null,
                new TreeNode(5),
            ),
        );
        expect(rightSideView(tree)).toEqual([1, 4, 5]);
    });

    it('switches to the left node if there is no right node', () => {
        const tree = new TreeNode(1, new TreeNode(2), new TreeNode(3, new TreeNode(4)));
        expect(rightSideView(tree)).toEqual([1, 3, 4]);
    });

    it('sees left nodes if right nodes are not enough long', () => {
        const tree = new TreeNode(1, new TreeNode(2, new TreeNode(4)), new TreeNode(3));
        expect(rightSideView(tree)).toEqual([1, 3, 4]);
    });
    it('handles empty root', () => {
        const tree = null;
        expect(rightSideView(tree)).toEqual([]);
    });
});
