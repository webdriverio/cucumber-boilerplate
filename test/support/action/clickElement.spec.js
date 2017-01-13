import clickElement from 'src/support/action/clickElement';

describe(
    'clickElement', () => {
        let done;
        let expectToHaveLengthOf;
        let expectToHaveLengthOfAtLeast;

        beforeEach(() => {
            global.browser = {
                click: jest.fn(),
                doubleClick: jest.fn(),
                elements: jest.fn(() => ({
                    value: ['1'],
                })).mockImplementationOnce(() => ({
                    value: [],
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

        it('should fail if the given element does not exist', () => {
            clickElement('click', 'element', 'element0', done);

            _expect(browser.click).toHaveBeenCalledWith('element0');

            _expect(expectToHaveLengthOfAtLeast).toHaveBeenCalledTimes(1);
            _expect(expectToHaveLengthOfAtLeast).toHaveBeenCalledWith(
                1,
                'Element with selector "element0" should exist on the page'
            );

            _expect(done).toHaveBeenCalledTimes(1);
        });

        it('should call click on the browser', () => {
            clickElement('click', 'element', 'element1', done);

            _expect(browser.click).toHaveBeenCalledWith('element1');

            _expect(expectToHaveLengthOfAtLeast).toHaveBeenCalledTimes(1);
            _expect(expectToHaveLengthOfAtLeast).toHaveBeenCalledWith(
                1,
                'Element with selector "element1" should exist on the page'
            );

            _expect(done).toHaveBeenCalledTimes(1);
        });

        it('should call doubleClick on the browser', () => {
            clickElement('doubleClick', 'element', 'element2', done);

            _expect(browser.doubleClick).toHaveBeenCalledWith('element2');

            _expect(expectToHaveLengthOfAtLeast).toHaveBeenCalledTimes(1);
            _expect(expectToHaveLengthOfAtLeast).toHaveBeenCalledWith(
                1,
                'Element with selector "element2" should exist on the page'
            );

            _expect(done).toHaveBeenCalledTimes(1);
        });

        it('should click a link when type is `link`', () => {
            clickElement('click', 'link', 'element3', done);

            _expect(browser.click).toHaveBeenCalledWith('=element3');

            _expect(expectToHaveLengthOfAtLeast).toHaveBeenCalledTimes(1);
            _expect(expectToHaveLengthOfAtLeast).toHaveBeenCalledWith(
                1,
                'Element with selector "=element3" should exist on the page'
            );

            _expect(done).toHaveBeenCalledTimes(1);
        });
    }
);
