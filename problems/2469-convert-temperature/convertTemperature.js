/**
 * @param {number} celsius
 * @return {number[]}
 */
const convertTemperature = function (celsius) {
    const kelvin = celsius + 273.15;
    const fahrenheit = celsius * 1.8 + 32;

    return [kelvin, fahrenheit];
};

module.exports = { convertTemperature };
