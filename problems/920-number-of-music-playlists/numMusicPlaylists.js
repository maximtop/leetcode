/**
 * @param {number} n
 * @param {number} goal
 * @param {number} k
 * @return {number}
 */
const numMusicPlaylists = function (n, goal, k) {
    const mod = 10 ** 9 + 7;
    const dp = {};
    const count = (newGoal, oldSongs) => {
        if (newGoal === 0 && oldSongs === n) {
            return 1;
        }
        if (newGoal === 0 || oldSongs > n) {
            return 0;
        }
        const key = `${newGoal}:${oldSongs}`;
        if (Object.prototype.hasOwnProperty.call(dp, key)) {
            return dp[key];
        }
        // add new song
        let res = (n - oldSongs) * count(newGoal - 1, oldSongs + 1);
        res %= mod;
        // add old song
        if (oldSongs > k) {
            res += (oldSongs - k) * count(newGoal - 1, oldSongs);
            res %= mod;
        }
        dp[key] = res;
        return dp[key];
    };

    return count(goal, 0);
};

module.exports = { numMusicPlaylists };
