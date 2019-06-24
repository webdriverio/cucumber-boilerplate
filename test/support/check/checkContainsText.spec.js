import checkContainsText from 'src/support/check/checkContainsText';

describe('checkContainsText', () => {
    let expectToContain;
    let expectToNotContain;
    let getTextMock;
    let getValueMock;
    let getAttributeMock;
    let waitForDisplayedMock;

    beforeEach(() => {
        getTextMock = jest.fn(() => 'text');
        getValueMock = jest.fn(() => 'value');
        getAttributeMock = jest.fn(() => '');
        waitForDisplayedMock = jest.fn(() => true);
        global.$ = jest.fn().mockReturnValue({
            getText: getTextMock,
            getValue: getValueMock,
            getAttribute: getAttributeMock,
            waitForDisplayed: waitForDisplayedMock,
        });

        expectToContain = jest.fn();
        expectToNotContain = jest.fn();

        global.expect = jest.fn(() => ({
            to: {
                contain: expectToContain,
                not: {
                    contain: expectToNotContain,
                },
            },
        }));
    });

    it('should call checkContainsText on the element object', () => {
        getAttributeMock.mockReturnValueOnce(() => null);
        checkContainsText('element', 'element1', 'text');

        // _expect(getTextMock).toHaveBeenCalledTimes(1);

        // _expect(global.expect).toHaveBeenCalledTimes(1);
        // _expect(global.expect).toHaveBeenCalledWith('text');
        //
        // _expect(expectToContain).toHaveBeenCalledTimes(1);
        // _expect(expectToContain).toHaveBeenCalledWith('text');
    });

    it('should call checkContainsText on the element object', () => {
        getAttributeMock.mockReturnValueOnce(() => null);
        checkContainsText('element', 'element1', ' not', 'text');

        // _expect(getTextMock).toHaveBeenCalledTimes(1);

        // _expect(global.expect).toHaveBeenCalledTimes(1);
        // _expect(global.expect).toHaveBeenCalledWith('text');
        //
        // _expect(expectToNotContain).toHaveBeenCalledTimes(1);
        // _expect(expectToNotContain).toHaveBeenCalledWith('text');
    });

    it('should call checkContainsText on the element object', () => {
        checkContainsText('button', 'button1', 'text');

        _expect(getTextMock).toHaveBeenCalledTimes(1);

        _expect(global.expect).toHaveBeenCalledTimes(1);
        _expect(global.expect).toHaveBeenCalledWith('text');

        _expect(expectToContain).toHaveBeenCalledTimes(1);
        _expect(expectToContain).toHaveBeenCalledWith('text');
    });

    it('should call checkContainsText on the element object', () => {
        checkContainsText('element', 'element2', 'text');

        _expect(getValueMock).toHaveBeenCalledTimes(1);

        _expect(global.expect).toHaveBeenCalledTimes(1);
        _expect(global.expect).toHaveBeenCalledWith('value');

        _expect(expectToContain).toHaveBeenCalledTimes(1);
        _expect(expectToContain).toHaveBeenCalledWith('text');
    });

    it('should call checkContainsText on the element object', () => {
        checkContainsText('element', 'element2', ' not', 'text');

        _expect(getValueMock).toHaveBeenCalledTimes(1);

        _expect(global.expect).toHaveBeenCalledTimes(1);
        _expect(global.expect).toHaveBeenCalledWith('value');

        _expect(expectToNotContain).toHaveBeenCalledTimes(1);
        _expect(expectToNotContain).toHaveBeenCalledWith('text');
    });
});
