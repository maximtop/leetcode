/**
 * @param {number[]} nums
 * @return {number[]}
 */
const longestObstacleCourseAtEachPosition = function (nums) {
    const bisect = (arr, n) => {
        let start = 0;
        let end = arr.length;
        while (start < end) {
            const mid = start + Math.floor((end - start) / 2);
            if (arr[mid] > n) {
                end = mid;
            } else {
                start = mid + 1;
            }
        }
        return start;
    };

    const res = [];
    const dp = [];
    for (const n of nums) {
        const index = bisect(dp, n);
        res.push(index + 1);
        dp[index] = n;
    }
    return res;
};

module.exports = { longestObstacleCourseAtEachPosition };
