import clickElement from 'src/support/action/clickElement';

describe(
    'clickElement', () => {
        let element;
        let done;

        beforeEach(() => {
            global.browser = {
                click: jest.fn(),
                doubleClick: jest.fn(),
            };

            element = 'element_selector';

            done = jest.fn();
        });

        it('should call click on the browser', () => {
            clickElement('click', 'element', element, done);

            expect(browser.click).toHaveBeenCalledWith(element);

            expect(done).toHaveBeenCalledTimes(1);
        });

        it('should call doubleClick on the browser', () => {
            clickElement('doubleClick', 'element', element, done);

            expect(browser.doubleClick).toHaveBeenCalledWith(element);

            expect(done).toHaveBeenCalledTimes(1);
        });

        it('should click a link when type is `link`', () => {
            clickElement('click', 'link', element, done);

            expect(browser.click).toHaveBeenCalledWith(`=${element}`);

            expect(done).toHaveBeenCalledTimes(1);
        });
    }
);
