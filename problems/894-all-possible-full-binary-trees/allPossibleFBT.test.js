const { allPossibleFBT } = require('./allPossibleFBT');
const { TreeNode } = require('../helpers/tree/TreeNode');

describe('allPossibleFBT', () => {
    it('returns all possible trees', () => {
        expect(allPossibleFBT(0)).toEqual([]);
        expect(allPossibleFBT(1)).toEqual([new TreeNode()]);
        expect(allPossibleFBT(2)).toEqual([]);
        expect(allPossibleFBT(3)).toEqual([new TreeNode(0, new TreeNode(), new TreeNode())]);
    });
});
