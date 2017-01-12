import checkNewWindow from 'src/support/check/checkNewWindow';

describe(
    'checkNewWindow', () => {
        let done;
        let expectToEqual;
        let expectToNotEqual;

        beforeEach(() => {
            global.browser = {
                windowHandles: jest.fn(() => ({
                    value: ['window1'],
                })),
            };

            expectToEqual = jest.fn();
            expectToNotEqual = jest.fn();

            global.expect = jest.fn(() => ({
                to: {
                    not: {
                        equal: expectToNotEqual,
                    },
                    equal: expectToEqual,
                },
            }));

            done = jest.fn();
        });

        it('Should test if a new window is opened', () => {
            checkNewWindow('', false, done);

            _expect(global.browser.windowHandles).toHaveBeenCalledTimes(1);
            _expect(global.browser.windowHandles).toHaveBeenCalledWith();

            _expect(expectToNotEqual).toHaveBeenCalledTimes(1);
            _expect(expectToNotEqual)
                .toHaveBeenCalledWith(
                    1,
                    'A new window has been opened'
                );

            _expect(done).toHaveBeenCalledTimes(1);
        });

        it('Should test if a new window is not opened', () => {
            checkNewWindow('', true, done);

            _expect(global.browser.windowHandles).toHaveBeenCalledTimes(1);
            _expect(global.browser.windowHandles).toHaveBeenCalledWith();

            _expect(expectToEqual).toHaveBeenCalledTimes(1);
            _expect(expectToEqual)
                .toHaveBeenCalledWith(
                    1,
                    'A new window should not have been opened'
                );

            _expect(done).toHaveBeenCalledTimes(1);
        });
    }
);
