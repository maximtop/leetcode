const { arrToTree, TreeNode } = require('./tree');

describe('tree', () => {
    describe('arrToTree', () => {
        it('converts arr to tree', () => {
            const arr = [1, 2, null, null, 3];
            const expectedTree = new TreeNode(1, new TreeNode(2, null, new TreeNode(3)));
            expect(arrToTree(arr).getTree()).toBe(expectedTree);
        });

        it('loses values if both nodes were nulls', () => {
            // FIXME
            // [1, null, null, 2] -> new TreeNode(1, new TreeNode(null), new TreeNode(null))
        });
    });
});
