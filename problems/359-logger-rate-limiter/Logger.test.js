const { Logger } = require('./Logger');

describe('Logger', () => {
    it('should print not often', () => {
        const logger = new Logger();
        expect(logger.shouldPrintMessage(1, 'foo')).toBeTruthy();
        expect(logger.shouldPrintMessage(2, 'foo')).toBeFalsy();
        expect(logger.shouldPrintMessage(11, 'foo')).toBeTruthy();
    });

    it('should print if same timestamps', () => {
        const logger = new Logger();
        expect(logger.shouldPrintMessage(1, 'foo')).toBeTruthy();
        expect(logger.shouldPrintMessage(1, 'foo')).toBeFalsy();
    });
});
