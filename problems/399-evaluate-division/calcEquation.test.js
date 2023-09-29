const { calcEquation } = require('./calcEquation');

describe('calcEquation', () => {
    it('calculates equations', () => {
        const equations = [['a', 'b'], ['b', 'c']];
        const values = [2.0, 3.0];
        const queries = [['a', 'c'], ['b', 'a'], ['a', 'e'], ['a', 'a'], ['x', 'x']];
        expect(calcEquation(equations, values, queries)).toEqual([6.00000, 0.50000, -1.00000, 1.00000, -1.00000]);
    });
});
