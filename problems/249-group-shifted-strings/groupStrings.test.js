const { groupStrings } = require('./groupStrings');

describe('groupStrings', () => {
    it('groups shifted strings normal case', () => {
        expect(groupStrings(['ab', 'bc', 'abc'])).toEqual([['ab', 'bc'], ['abc']]);
        expect(groupStrings(['az', 'ba'])).toEqual([['az', 'ba']]);
        expect(groupStrings(['abc', 'bcd', 'acef', 'xyz', 'az', 'ba', 'a', 'z']).sort())
            .toEqual([['acef'], ['a', 'z'], ['abc', 'bcd', 'xyz'], ['az', 'ba']].sort());
    });
});
