import moveToElement from 'src/support/action/moveToElement';

describe(
    'moveToElement', () => {
        let done;

        beforeEach(() => {
            global.browser = {
                moveToObject: jest.fn(),
            };

            done = jest.fn();
        });

        it(
            'should call moveToObject with only the element when no x and y ' +
            'are provided',
            () => {
                moveToElement('element', '', undefined, undefined, done);

                expect(global.browser.moveToObject).toHaveBeenCalledTimes(1);
                expect(global.browser.moveToObject)
                    .toHaveBeenCalledWith('element', undefined, undefined);

                expect(done).toHaveBeenCalledTimes(1);
            }
        );

        it(
            'should call moveToObject with x when provided as int',
            () => {
                moveToElement('element', '', 1, undefined, done);

                expect(global.browser.moveToObject).toHaveBeenCalledTimes(1);
                expect(global.browser.moveToObject)
                    .toHaveBeenCalledWith('element', 1, undefined);

                expect(done).toHaveBeenCalledTimes(1);
            }
        );

        it(
            'should call moveToObject with y when provided as int',
            () => {
                moveToElement('element', '', undefined, 1, done);

                expect(global.browser.moveToObject).toHaveBeenCalledTimes(1);
                expect(global.browser.moveToObject)
                    .toHaveBeenCalledWith('element', undefined, 1);

                expect(done).toHaveBeenCalledTimes(1);
            }
        );

        it(
            'should call moveToObject with x and y when provided as int',
            () => {
                moveToElement('element', '', 1, 2, done);

                expect(global.browser.moveToObject).toHaveBeenCalledTimes(1);
                expect(global.browser.moveToObject)
                    .toHaveBeenCalledWith('element', 1, 2);

                expect(done).toHaveBeenCalledTimes(1);
            }
        );
    }
);
