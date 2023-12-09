const { findMaxForm } = require('./findMaxForm');

describe('findMaxForm', () => {
    it('finds max substring', () => {
        expect(findMaxForm(['10', '0001', '111001', '1', '0'], 5, 3)).toBe(4);
    });
});
