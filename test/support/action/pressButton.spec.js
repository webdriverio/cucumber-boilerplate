import pressButton from 'src/support/action/pressButton';

describe('pressButton', () => {
    beforeEach(() => {
        global.browser = {
            keys: jest.fn(),
        };
    });

    it('should call keys on the browser object', async () => {
        await pressButton('e');

        expect(global.browser.keys).toHaveBeenCalledTimes(1);
        expect(global.browser.keys).toHaveBeenCalledWith('e');
    });
});
