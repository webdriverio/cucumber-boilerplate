import dragElement from 'src/support/action/dragElement';

describe(
    'dragElement', () => {
        let done;

        beforeEach(() => {
            global.browser = {
                dragAndDrop: jest.fn(),
            };

            done = jest.fn();
        });

        it('should call dragAndDrop on the browser', () => {
            dragElement('source', 'destination', done);

            expect(global.browser.dragAndDrop).toHaveBeenCalledTimes(1);

            expect(global.browser.dragAndDrop)
                .toHaveBeenCalledWith('source', 'destination');

            expect(done).toHaveBeenCalledTimes(1);
        });
    }
);
