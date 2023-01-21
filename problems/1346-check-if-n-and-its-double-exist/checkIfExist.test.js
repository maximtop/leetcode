const { checkIfExist } = require('./checkIfExist');

describe('checkIfExist', () => {
    it('checks dupliacte', () => {
        expect(checkIfExist([10, 2, 5, 3])).toBe(true);
    });
});
