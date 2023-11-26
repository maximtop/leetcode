const { longestObstacleCourseAtEachPosition } = require('./longestObstacleCourseAtEachPosition');

describe('longestObstacleCourseAtEachPosition', () => {
    it('finds longest obstacles for each position', () => {
        expect(longestObstacleCourseAtEachPosition([1, 2, 3, 2])).toEqual([1, 2, 3, 3]);
    });
});
