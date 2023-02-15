const { TwoSum } = require('./TwoSum');

describe('TwoSum', () => {
    it('checks if sum can be found in stream', () => {
        const twoSum = new TwoSum();
        twoSum.add(1);
        twoSum.add(1);
        expect(twoSum.find(2)).toBe(true);
        expect(twoSum.find(3)).toBe(false);
        expect(twoSum.find(1)).toBe(false);
    });

    it('returns true if has only one number', () => {
        const twoSum = new TwoSum();
        twoSum.add(3);
        twoSum.add(1);
        twoSum.add(2);
        expect(twoSum.find(3)).toBe(true);
    });
});
