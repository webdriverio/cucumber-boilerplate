import switchIFrame from 'src/support/action/switchIFrame';

let switchToFrameMock;

describe('switchIFrame', () => {
    beforeEach(() => {
        switchToFrameMock = jest.fn();
        global.$ = jest.fn().mockResolvedValue({
            selector: 'iframe-selector',
        });
        global.browser = {
            switchToFrame: switchToFrameMock,
        };
    });

    it('should call switchToFrame on the browser', async () => {
        const selector = 'iframe-selector';
        await switchIFrame(selector);
        expect(switchToFrameMock).toHaveBeenCalledWith({ selector });
    });
});
