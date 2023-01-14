/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
const dailyTemperatures = function (temperatures) {
    const result = Array(temperatures.length).fill(0);
    const stack = [];
    for (let currDay = 0; currDay < temperatures.length; currDay += 1) {
        const currTemp = temperatures[currDay];
        while (stack.length > 0 && temperatures[stack[stack.length - 1]] < currTemp) {
            const prevDay = stack.pop();
            result[prevDay] = currDay - prevDay;
        }
        stack.push(currDay);
    }
    return result;
};

module.exports = { dailyTemperatures };
