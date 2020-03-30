import checkContent from 'src/support/check/checkContainsAnyText';

describe('checkContent', () => {
    let expectToEqual;
    let expectToNotEqual;
    let getTextMock;
    let getValueMock;
    let getAttributeMock;

    beforeEach(() => {
        getTextMock = jest.fn(() => 'text');
        getValueMock = jest.fn(() => 'value');
        getAttributeMock = jest.fn(() => null);
        global.$ = jest.fn().mockReturnValue({
            getText: getTextMock,
            getValue: getValueMock,
            getAttribute: getAttributeMock,
        });

        expectToEqual = jest.fn();
        expectToNotEqual = jest.fn();

        global.expect = jest.fn(() => ({
            toBe: expectToEqual,
            not: {
                toBe: expectToNotEqual,
            },
        }));
    });

    it('Should handle input fields', () => {
        getAttributeMock.mockReturnValueOnce(() => '');
        checkContent('element', 'element1', false);

        _expect(getTextMock).not.toHaveBeenCalledTimes(1);

        _expect(getValueMock).toHaveBeenCalledTimes(1);

        _expect(expectToNotEqual).toHaveBeenCalledTimes(1);
        _expect(expectToNotEqual).toHaveBeenCalledWith('');
    });

    it('Should handle elements', () => {
        checkContent('element', 'element2', false);

        _expect(getTextMock).toHaveBeenCalledTimes(1);

        _expect(getValueMock).not.toHaveBeenCalledTimes(1);

        _expect(expectToNotEqual).toHaveBeenCalledTimes(1);
        _expect(expectToNotEqual).toHaveBeenCalledWith('');
    });

    it('Should handle buttons', () => {
        checkContent('button', 'button1', false);

        _expect(getTextMock).toHaveBeenCalledTimes(1);

        _expect(getValueMock).not.toHaveBeenCalledTimes(1);

        _expect(expectToNotEqual).toHaveBeenCalledTimes(1);
        _expect(expectToNotEqual).toHaveBeenCalledWith('');
    });

    it('Handle the false case', () => {
        checkContent('element', 'element3', true);

        _expect(getTextMock).toHaveBeenCalledTimes(1);

        _expect(getValueMock).not.toHaveBeenCalledTimes(1);

        _expect(expectToEqual).toHaveBeenCalledTimes(1);
        _expect(expectToEqual).toHaveBeenCalledWith('');
    });

    it('should handle no expected text and no falsecase', () => {
        checkContent('element', 'element4');

        _expect(getTextMock).toHaveBeenCalledTimes(1);

        _expect(getValueMock).not.toHaveBeenCalledTimes(1);

        _expect(expectToNotEqual).toHaveBeenCalledTimes(1);
        _expect(expectToNotEqual).toHaveBeenCalledWith('');
    });
});
