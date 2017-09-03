import checkClass from 'src/support/check/checkClass';

describe('checkClass', () => {
    let expectToIncludeStub;
    let expectToNotIncludeStub;

    beforeEach(() => {
        global.browser = {
            getAttribute: jest.fn(() => 'class1 class2'),
        };

        expectToIncludeStub = jest.fn();
        expectToNotIncludeStub = jest.fn();

        global.expect = jest.fn(() => ({
            to: {
                include: expectToIncludeStub,
                not: {
                    include: expectToNotIncludeStub,
                },
            },
        }));
    });

    it('should call checkClass on the browser object', () => {
        checkClass('element1', 'has', 'class1');

        _expect(global.browser.getAttribute).toHaveBeenCalledTimes(1);
        _expect(global.browser.getAttribute)
            .toHaveBeenCalledWith('element1', 'className');

        _expect(global.expect).toHaveBeenCalledTimes(1);
        _expect(global.expect)
            .toHaveBeenCalledWith(['class1', 'class2']);

        _expect(expectToIncludeStub).toHaveBeenCalledTimes(1);
        _expect(expectToIncludeStub)
            .toHaveBeenCalledWith(
                'class1',
                'Element element1 should have the class class1'
            );
    });

    it('should call checkClass on the browser object', () => {
        checkClass('element1', 'has', 'class3');

        _expect(global.browser.getAttribute).toHaveBeenCalledTimes(1);
        _expect(global.browser.getAttribute)
            .toHaveBeenCalledWith('element1', 'className');

        _expect(global.expect).toHaveBeenCalledTimes(1);
        _expect(global.expect)
            .toHaveBeenCalledWith(['class1', 'class2']);

        _expect(expectToIncludeStub).toHaveBeenCalledTimes(1);
        _expect(expectToIncludeStub)
            .toHaveBeenCalledWith(
                'class3',
                'Element element1 should have the class class3'
            );
    });

    it('should call checkClass on the browser object', () => {
        checkClass('element1', 'does not have', 'class3');

        _expect(global.browser.getAttribute).toHaveBeenCalledTimes(1);
        _expect(global.browser.getAttribute)
            .toHaveBeenCalledWith('element1', 'className');

        _expect(global.expect).toHaveBeenCalledTimes(1);
        _expect(global.expect)
            .toHaveBeenCalledWith(['class1', 'class2']);

        _expect(expectToNotIncludeStub).toHaveBeenCalledTimes(1);
        _expect(expectToNotIncludeStub)
            .toHaveBeenCalledWith(
                'class3',
                'Element element1 should not have the class class3'
            );
    });

    it('should call checkClass on the browser object', () => {
        checkClass('element1', 'does not have', 'class1');

        _expect(global.browser.getAttribute).toHaveBeenCalledTimes(1);
        _expect(global.browser.getAttribute)
            .toHaveBeenCalledWith('element1', 'className');

        _expect(global.expect).toHaveBeenCalledTimes(1);
        _expect(global.expect)
            .toHaveBeenCalledWith(['class1', 'class2']);

        _expect(expectToNotIncludeStub).toHaveBeenCalledTimes(1);
        _expect(expectToNotIncludeStub)
            .toHaveBeenCalledWith(
                'class1',
                'Element element1 should not have the class class1'
            );
    });
});
