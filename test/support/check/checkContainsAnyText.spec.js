import checkContent from 'src/support/check/checkContainsAnyText';

describe('checkContent', () => {
    let expectToEqual;
    let expectToNotEqual;

    beforeEach(() => {
        global.browser = {
            getAttribute: jest.fn((element) => {
                if (element === 'element1') {
                    return '';
                }

                return null;
            }),
            getText: jest.fn(() => 'text'),
            getValue: jest.fn(() => 'value'),
        };

        expectToEqual = jest.fn();
        expectToNotEqual = jest.fn();

        global.expect = jest.fn(() => ({
            to: {
                equal: expectToEqual,
                not: {
                    equal: expectToNotEqual,
                },
            },
        }));
    });

    it('Should handle input fields', () => {
        checkContent('element1', false);

        _expect(global.browser.getText).not.toHaveBeenCalledTimes(1);

        _expect(global.browser.getValue).toHaveBeenCalledTimes(1);
        _expect(global.browser.getValue).toHaveBeenCalledWith('element1');

        _expect(expectToNotEqual).toHaveBeenCalledTimes(1);
        _expect(expectToNotEqual)
            .toHaveBeenCalledWith('');
    });

    it('Should handle elements', () => {
        checkContent('element2', false);

        _expect(global.browser.getText).toHaveBeenCalledTimes(1);
        _expect(global.browser.getText).toHaveBeenCalledWith('element2');

        _expect(global.browser.getValue).not.toHaveBeenCalledTimes(1);

        _expect(expectToNotEqual).toHaveBeenCalledTimes(1);
        _expect(expectToNotEqual).toHaveBeenCalledWith('');
    });

    it('Handle the false case', () => {
        checkContent('element3', true);

        _expect(global.browser.getText).toHaveBeenCalledTimes(1);
        _expect(global.browser.getText).toHaveBeenCalledWith('element3');

        _expect(global.browser.getValue).not.toHaveBeenCalledTimes(1);

        _expect(expectToEqual).toHaveBeenCalledTimes(1);
        _expect(expectToEqual).toHaveBeenCalledWith('');
    });

    it('should handle no expected text and no falsecase', () => {
        checkContent('element4');

        _expect(global.browser.getText).toHaveBeenCalledTimes(1);
        _expect(global.browser.getText).toHaveBeenCalledWith('element4');

        _expect(global.browser.getValue).not.toHaveBeenCalledTimes(1);

        _expect(expectToNotEqual).toHaveBeenCalledTimes(1);
        _expect(expectToNotEqual).toHaveBeenCalledWith('');
    });
});
