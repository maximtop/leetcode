const { Twitter } = require('./Twitter');

describe('Twitter', () => {
    it('works', () => {
        const twitter = new Twitter();
        twitter.postTweet(1, 1);
        expect(twitter.getNewsFeed(1)).toEqual([1]);
        twitter.postTweet(2, 2);
        twitter.follow(1, 2);
        expect(twitter.getNewsFeed(1)).toEqual([2, 1]);
        twitter.unfollow(1, 2);
        expect(twitter.getNewsFeed(1)).toEqual([1]);
    });
});
