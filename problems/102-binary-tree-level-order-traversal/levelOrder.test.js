const { TreeNode } = require('../helpers/tree/TreeNode');
const { levelOrder } = require('./levelOrder');

describe('levelOrder', () => {
    it('iterates one level at time', () => {
        const tree = new TreeNode(
            1,
            new TreeNode(2, new TreeNode(3)),
            new TreeNode(4, null, new TreeNode(5)),
        );
        expect(levelOrder(tree)).toEqual([[1], [2, 4], [3, 5]]);
    });
});
