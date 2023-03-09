const { TreeNode } = require('../helpers/tree/TreeNode');
const { lowestCommonAncestorNaive, hasNode, lowestCommonAncestor } = require('./lowestCommonAncestor');

describe('lowestCommonAncestor', () => {
    it('finds lowest common ancestor', () => {
        const treeNode4 = new TreeNode(4);
        const treeNode5 = new TreeNode(5);
        const tree = new TreeNode(1, new TreeNode(2, treeNode4), new TreeNode(3, treeNode5));
        expect(lowestCommonAncestor(tree, treeNode4, treeNode5)).toBe(tree);
    });
});

describe('lowestCommonAncestorNaive', () => {
    it('finds lowest common ancestor', () => {
        const treeNode4 = new TreeNode(4);
        const treeNode5 = new TreeNode(5);
        const tree = new TreeNode(1, new TreeNode(2, treeNode4), new TreeNode(3, treeNode5));
        expect(lowestCommonAncestorNaive(tree, treeNode4, treeNode5)).toBe(tree);
    });
});

describe('hasNode', () => {
    it('checks if root has node inside', () => {
        const node = new TreeNode(1);
        const tree = new TreeNode(
            2,
            new TreeNode(3, new TreeNode(4)),
            new TreeNode(5, new TreeNode(6, node)),
        );
        expect(hasNode(tree, node)).toBeTruthy();
    });
});
