/**
 * @param {string} path
 * @return {string}
 */
const simplifyPath = function (path) {
    const parts = path.split('/');
    const stack = [];
    for (const part of parts) {
        if (part === '..') {
            stack.pop();
            continue;
        }
        if (part !== '.' && part !== '') {
            stack.push(part);
        }
    }
    return `/${stack.join('/')}`;
};

module.exports = { simplifyPath };
