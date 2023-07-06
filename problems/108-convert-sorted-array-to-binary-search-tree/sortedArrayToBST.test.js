const { sortedArrayToBST } = require('./sortedArrayToBST');
const { TreeNode } = require('../helpers/tree/TreeNode');

describe('sortedArrayToBST', () => {
    it('converts sorted array to the height balanced binary search tree', () => {
        const sortedArray = [1, 2, 3, 4, 5];
        expect(sortedArrayToBST(sortedArray)).toEqual(new TreeNode(
            3,
            new TreeNode(2, new TreeNode(1), null),
            new TreeNode(5, new TreeNode(4), null),
        ));
    });
});
