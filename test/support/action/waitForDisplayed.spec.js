import waitForDisplayed from 'src/support/action/waitForDisplayed';

let waitForDisplayedMock;

describe('waitForVisible', () => {
    beforeEach(() => {
        waitForDisplayedMock = jest.fn();
        global.$ = jest.fn().mockReturnValue({
            waitForDisplayed: waitForDisplayedMock,
        });
    });

    it('should call waitForVisible on the browser object', async () => {
        await waitForDisplayed('element', true);

        expect(waitForDisplayedMock).toHaveBeenCalledTimes(1);
        expect(waitForDisplayedMock)
            .toHaveBeenCalledWith({
                timeout: 10000,
                reverse: true,
            });
    });

    it('should call waitForVisible on the browser object', async () => {
        await waitForDisplayed('element', false);

        expect(waitForDisplayedMock).toHaveBeenCalledTimes(1);
        expect(waitForDisplayedMock)
            .toHaveBeenCalledWith({
                timeout: 10000,
                reverse: false,
            });
    });
});
