const { MaxPriorityQueue } = require('@datastructures-js/priority-queue');

const Twitter = function () {
    this.tweets = {};
    this.followers = {};
    this.counter = 0;
};

/**
 * @param {number} userId
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function (userId, tweetId) {
    this.tweets[userId] = this.tweets[userId] ?? [];
    this.tweets[userId].push({ tweetId, counter: this.counter });
    this.counter += 1;
};

/**
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function (userId) {
    const maxpq = new MaxPriorityQueue();

    const userTweets = [...this.tweets[userId] ?? []];
    for (const user of Object.keys(this.followers[userId] ?? {})) {
        userTweets.push(...(this.tweets[user] ?? []));
    }

    for (const tweet of userTweets) {
        maxpq.enqueue(tweet.tweetId, tweet.counter);
    }

    const result = [];
    while (result.length < 10 && !maxpq.isEmpty()) {
        result.push(maxpq.dequeue().element);
    }
    return result;
};

/**
 * @param {number} followerId
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function (followerId, followeeId) {
    if (this.followers[followerId]) {
        this.followers[followerId][followeeId] = true;
    } else {
        this.followers[followerId] = { [followeeId]: true };
    }
};

/**
 * @param {number} followerId
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function (followerId, followeeId) {
    delete this.followers[followerId][followeeId];
};

/**
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */

module.exports = { Twitter };
