const { findItinerary } = require('./findItinerary');

describe('findItinerary', () => {
    it('finds itinerary', () => {
        expect(findItinerary([
            ['MUC', 'LHR'],
            ['JFK', 'MUC'],
            ['SFO', 'SJC'],
            ['LHR', 'SFO'],
        ])).toEqual(['JFK', 'MUC', 'LHR', 'SFO', 'SJC']);
    });
});
