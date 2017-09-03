import dragElement from 'src/support/action/dragElement';

describe('dragElement', () => {
    beforeEach(() => {
        global.browser = {
            dragAndDrop: jest.fn(),
        };
    });

    it('should call dragAndDrop on the browser', () => {
        dragElement('source', 'destination');

        expect(global.browser.dragAndDrop).toHaveBeenCalledTimes(1);

        expect(global.browser.dragAndDrop)
            .toHaveBeenCalledWith('source', 'destination');
    });
});
