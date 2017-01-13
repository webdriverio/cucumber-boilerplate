import checkElementExists from 'src/support/check/checkElementExists';

describe(
    'checkElementExists', () => {
        let expectToHaveLengthOf;
        let expectToHaveLengthOfAtLeast;
        let done;

        beforeEach(() => {
            global.browser = {
                elements: jest.fn(() => ({
                    value: 1,
                })),
            };

            expectToHaveLengthOf = jest.fn();
            expectToHaveLengthOfAtLeast = jest.fn();

            global.expect = jest.fn(() => ({
                to: {
                    have: {
                        length: {
                            of: {
                                at: {
                                    least: expectToHaveLengthOfAtLeast,
                                },
                            },
                        },
                        lengthOf: expectToHaveLengthOf,
                    },
                },
            }));

            done = jest.fn();
        });

        it('Should test if the element exists', () => {
            checkElementExists('an', 'element1', done);

            _expect(global.browser.elements).toHaveBeenCalledTimes(1);
            _expect(global.browser.elements).toHaveBeenCalledWith('element1');

            _expect(expectToHaveLengthOfAtLeast).toHaveBeenCalledTimes(1);
            _expect(expectToHaveLengthOfAtLeast).toHaveBeenCalledWith(
                1,
                'Element with selector "element1" should exist on the page'
            );

            _expect(done).toHaveBeenCalledTimes(1);
        });

        it('Should test if the element does not exist', () => {
            checkElementExists('no', 'element2', done);

            _expect(global.browser.elements).toHaveBeenCalledTimes(1);
            _expect(global.browser.elements).toHaveBeenCalledWith('element2');

            _expect(expectToHaveLengthOf).toHaveBeenCalledTimes(1);
            _expect(expectToHaveLengthOf).toHaveBeenCalledWith(
                0,
                'Element with selector "element2" should not exist on the page'
            );

            _expect(done).toHaveBeenCalledTimes(1);
        });
    }
);
