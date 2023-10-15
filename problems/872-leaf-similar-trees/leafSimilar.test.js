const { TreeNode } = require('../helpers/tree/TreeNode');
const { leafSimilar } = require('./leafSimilar');

describe('leafSimilar', () => {
    it('checks if leafs are similar', () => {
        const tree1 = new TreeNode(1, new TreeNode(1, new TreeNode(2)), new TreeNode(3));
        const tree2 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
        expect(leafSimilar(tree1, tree2)).toBe(true);
    });

    it('checks if leafs are in different order', () => {
        const tree1 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
        const tree2 = new TreeNode(1, new TreeNode(3), new TreeNode(2));
        expect(leafSimilar(tree1, tree2)).toBe(false);
    });
});
