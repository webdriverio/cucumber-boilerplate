import selectOptionByIndex from 'src/support/action/selectOptionByIndex';

describe(
    'selectOptionByIndex', () => {
        let done;

        beforeEach(() => {
            global.browser = {
                selectByIndex: jest.fn(),
            };

            done = jest.fn();
        });

        it(
            'should call selectByIndex on the browser object',
            () => {
                selectOptionByIndex(1, '', 'element', done);

                expect(global.browser.selectByIndex).toHaveBeenCalledTimes(1);
                expect(global.browser.selectByIndex)
                    .toHaveBeenCalledWith('element', 1);

                expect(done).toHaveBeenCalledTimes(1);
            }
        );
    }
);
