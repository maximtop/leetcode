const { sumNumbers } = require('./sumNumbersRecursive');
const { TreeNode } = require('../helpers/tree/TreeNode');

describe('sumNumbers', () => {
    it('sums numbers', () => {
        expect(sumNumbers(new TreeNode(1, new TreeNode(2), new TreeNode(3)))).toEqual(25);
    });
});
