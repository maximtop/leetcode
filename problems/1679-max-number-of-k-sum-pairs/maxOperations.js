/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const maxOperations = function(nums, k) {
    // Create a map to store occurrences of each number
    const numOccurrences = {};
    let maxOperations = 0;

    for (const num of nums) {
        const complement = k - num;

        // Check if the complement exists in the map
        if (numOccurrences[complement] > 0) {
            maxOperations += 1;
            numOccurrences[complement] -= 1;
        } else {
            // If not, add or increment the number in the map
            numOccurrences[num] = (numOccurrences[num] || 0) + 1;
        }
    }

    return maxOperations;
};

module.exports = { maxOperations };
