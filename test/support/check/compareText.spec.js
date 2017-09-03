import compareText from 'src/support/check/compareText';

describe('compareText', () => {
    let expectToEqual;
    let expectToNotEqual;

    beforeEach(() => {
        global.browser = {
            getText: jest.fn(() => 'test'),
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
    });

    it('Should test if the text of the given element is the same', () => {
        compareText('#elem1', false, '#elem2');

        _expect(global.browser.getText).toHaveBeenCalledTimes(2);
        _expect(global.browser.getText).toHaveBeenCalledWith('#elem1');
        _expect(global.browser.getText).toHaveBeenCalledWith('#elem2');

        _expect(expectToEqual).toHaveBeenCalledTimes(1);
        _expect(expectToEqual)
            .toHaveBeenCalledWith(
                'test',
                'Expected text to be "test" but found "test"'
            );
    });

    it('Should test if the text of the given element is not the same', () => {
        compareText('#elem3', true, '#elem4');

        _expect(global.browser.getText).toHaveBeenCalledTimes(2);
        _expect(global.browser.getText).toHaveBeenCalledWith('#elem3');
        _expect(global.browser.getText).toHaveBeenCalledWith('#elem4');

        _expect(expectToNotEqual).toHaveBeenCalledTimes(1);
        _expect(expectToNotEqual)
            .toHaveBeenCalledWith(
                'test',
                'Expected text not to be "test"'
            );
    });
});
