const { findRestaurant } = require('./findRestaurant');

describe('findRestaurant', () => {
    it('finds minimum sum index', () => {
        expect(findRestaurant(
            ['Shogun', 'Tapioca Express', 'Burger King', 'KFC'],
            ['Piatti', 'The Grill at Torrey Pines', 'Hungry Hunter Steakhouse', 'Shogun'],
        )).toEqual(['Shogun']);
        expect(findRestaurant(['Shogun', 'Tapioca Express', 'Burger King', 'KFC'], ['KFC', 'Shogun', 'Burger King'])).toEqual(['Shogun']);
        expect(findRestaurant(['happy', 'sad', 'good'], ['sad', 'happy', 'good'])).toEqual(['sad', 'happy']);
    });
});
