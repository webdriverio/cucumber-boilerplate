import scroll from 'src/support/action/scroll';

let scrollIntoViewMock;

describe('scroll', () => {
    beforeEach(() => {
        scrollIntoViewMock = jest.fn();
        global.$ = jest.fn().mockReturnValue({
            scrollIntoView: scrollIntoViewMock,
        });
    });

    it('should call scrollIntoView on the browser object', () => {
        scroll('element');
        expect(scrollIntoViewMock).toHaveBeenCalledTimes(1);
    });
});
