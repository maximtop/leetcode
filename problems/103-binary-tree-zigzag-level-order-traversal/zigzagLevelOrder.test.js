const { TreeNode } = require('../helpers/tree/TreeNode');
const { zigzagLevelOrder } = require('./zigzagLevelOrder');

describe('zigzagLevelOrder', () => {
    it('traverses tree by zigzag', () => {
        const tree = new TreeNode(1, new TreeNode(2), new TreeNode(3, new TreeNode(4), new TreeNode(5)));
        expect(zigzagLevelOrder(tree)).toEqual([[1], [3, 2], [4, 5]]);
    });
});
