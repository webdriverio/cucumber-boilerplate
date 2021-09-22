import checkClass from 'src/support/check/checkClass';

describe('checkClass', () => {
    let expectToIncludeStub;
    let expectToNotIncludeStub;
    let getPropertyMock;

    beforeEach(() => {
        getPropertyMock = jest.fn(() => Promise.resolve('class1 class2'));
        global.$ = jest.fn().mockReturnValue({
            getProperty: getPropertyMock,
        });

        expectToIncludeStub = jest.fn();
        expectToNotIncludeStub = jest.fn();

        global.expect = jest.fn(() => ({
            toContain: expectToIncludeStub,
            not: {
                toContain: expectToNotIncludeStub,
            },
        }));
    });

    it('should fail if no property was found', async () => {
        getPropertyMock = jest.fn(() => null);
        global.$ = jest.fn().mockReturnValue({
            getProperty: getPropertyMock,
        });
        await _expect(checkClass('element1', 'has', 'class1'))
            .rejects.toEqual(new Error('Element with selector "element1" did\'t had a class name'));
    });

    it('should call checkClass on the browser object', async () => {
        await checkClass('element1', 'has', 'class1');

        _expect(getPropertyMock).toHaveBeenCalledTimes(1);
        _expect(getPropertyMock).toHaveBeenCalledWith('className');

        _expect(global.expect).toHaveBeenCalledTimes(1);
        _expect(global.expect).toHaveBeenCalledWith(['class1', 'class2']);

        _expect(expectToIncludeStub).toHaveBeenCalledTimes(1);
        _expect(expectToIncludeStub).toHaveBeenCalledWith(
            'class1',
            'Element element1 should have the class class1'
        );
    });

    it('should call checkClass on the browser object', async () => {
        await checkClass('element1', 'has', 'class3');

        _expect(getPropertyMock).toHaveBeenCalledTimes(1);
        _expect(getPropertyMock).toHaveBeenCalledWith('className');

        _expect(global.expect).toHaveBeenCalledTimes(1);
        _expect(global.expect).toHaveBeenCalledWith(['class1', 'class2']);

        _expect(expectToIncludeStub).toHaveBeenCalledTimes(1);
        _expect(expectToIncludeStub).toHaveBeenCalledWith(
            'class3',
            'Element element1 should have the class class3'
        );
    });

    it('should call checkClass on the browser object', async () => {
        await checkClass('element1', 'does not have', 'class3');

        _expect(getPropertyMock).toHaveBeenCalledTimes(1);
        _expect(getPropertyMock).toHaveBeenCalledWith('className');

        _expect(global.expect).toHaveBeenCalledTimes(1);
        _expect(global.expect).toHaveBeenCalledWith(['class1', 'class2']);

        _expect(expectToNotIncludeStub).toHaveBeenCalledTimes(1);
        _expect(expectToNotIncludeStub).toHaveBeenCalledWith(
            'class3',
            'Element element1 should not have the class class3'
        );
    });

    it('should call checkClass on the browser object', async () => {
        await checkClass('element1', 'does not have', 'class1');

        _expect(getPropertyMock).toHaveBeenCalledTimes(1);
        _expect(getPropertyMock)
            .toHaveBeenCalledWith('className');

        _expect(global.expect).toHaveBeenCalledTimes(1);
        _expect(global.expect).toHaveBeenCalledWith(['class1', 'class2']);

        _expect(expectToNotIncludeStub).toHaveBeenCalledTimes(1);
        _expect(expectToNotIncludeStub).toHaveBeenCalledWith(
            'class1',
            'Element element1 should not have the class class1'
        );
    });
});
