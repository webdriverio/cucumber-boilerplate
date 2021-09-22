import waitFor from 'src/support/action/waitFor';

let waitForExist;
let waitForEnabled;
let waitForDisplayed;

describe('waitFor', () => {
    beforeEach(() => {
        waitForExist = jest.fn();
        waitForEnabled = jest.fn();
        waitForDisplayed = jest.fn();

        global.$ = jest.fn().mockReturnValue({
            waitForExist,
            waitForEnabled,
            waitForDisplayed,
        });
    });

    it('should call waitForExist on the element object', async () => {
        await waitFor('element', 1, undefined, '');

        expect(waitForExist).toHaveBeenCalledTimes(1);
        expect(waitForExist).toHaveBeenCalledWith({
            timeout: 1,
            reverse: false,
        });
    });

    it('should call waitForExist on the element object', async () => {
        await waitFor('element', 1, false, '');

        expect(waitForExist).toHaveBeenCalledTimes(1);
        expect(waitForExist).toHaveBeenCalledWith({
            timeout: 1,
            reverse: false,
        });
    });

    it('should call waitForExist on the element object', async () => {
        await waitFor('element', 1, true, '');

        expect(waitForExist).toHaveBeenCalledTimes(1);
        expect(waitForExist).toHaveBeenCalledWith({
            timeout: 1,
            reverse: true,
        });
    });

    it('should use a default value for the timeout', async () => {
        await waitFor('element', 0, false, '');

        expect(waitForExist).toHaveBeenCalledTimes(1);
        expect(waitForExist).toHaveBeenCalledWith({
            timeout: 3000,
            reverse: false,
        });
    });

    it('should call waitForEnabled on the browser object', async () => {
        await waitFor('element', 1, false, 'be enabled');

        expect(waitForEnabled).toHaveBeenCalledTimes(1);
        expect(waitForEnabled).toHaveBeenCalledWith({
            timeout: 1,
            reverse: false,
        });
    });

    it('should call waitForVisible on the element object', async () => {
        await waitFor('element', 1, false, 'be displayed');

        expect(waitForDisplayed).toHaveBeenCalledTimes(1);
        expect(waitForDisplayed).toHaveBeenCalledWith({
            timeout: 1,
            reverse: false,
        });
    });

    it('should call waitForExist on the element object', async () => {
        await waitFor('element', 1, false, 'exist');

        expect(waitForExist).toHaveBeenCalledTimes(1);
        expect(waitForExist).toHaveBeenCalledWith({
            timeout: 1,
            reverse: false,
        });
    });
});
