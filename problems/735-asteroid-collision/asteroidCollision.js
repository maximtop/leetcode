/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
const asteroidCollision = function(asteroids) {
    const result = [];
    for (let i = 0; i < asteroids.length; i += 1) {
        let next = asteroids[i];
        if (result.length === 0) {
            result.push(next);
        } else {
            while (result.length > 0) {
                const prev = result.pop();
                if (next < 0 && prev > 0) {
                    if (Math.abs(next) === Math.abs(prev)) {
                        next = null;
                        break;
                    } else {
                        next = Math.abs(next) > Math.abs(prev) ? next : prev;
                    }
                } else {
                    result.push(prev);
                    result.push(next);
                    next = null;
                    break;
                }
            }
            if (next) {
                result.push(next);
            }
        }
    }
    return result;
};

module.exports = { asteroidCollision };
