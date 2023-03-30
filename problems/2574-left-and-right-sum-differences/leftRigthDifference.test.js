const { leftRigthDifference } = require('./leftRigthDifference');

describe('leftRigthDifference', () => {
    it('works', () => {
        expect(leftRigthDifference([10, 4, 8, 3])).toEqual([15, 1, 11, 22]);
    });
});
