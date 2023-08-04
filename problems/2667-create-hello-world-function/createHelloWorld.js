/* eslint-disable no-unused-vars */
/**
 * @return {Function}
 */
const createHelloWorld = function () {
    return function (...args) {
        return 'Hello World';
    };
};

module.exports = { createHelloWorld };
