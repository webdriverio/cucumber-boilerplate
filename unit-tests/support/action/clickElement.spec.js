const sinon = require('sinon');
const chai = require('chai');
const assert = chai.assert;
const clickElement = require('../../../test/support/action/clickElement');

describe(
    'clickElement', () => {
        let element, done;

        beforeEach(() => {
            global.browser = {
                click: sinon.mock(),
                doubleClick: sinon.mock()
            };

            element = 'element_selector';

            done = sinon.mock();
        });

        it('should call click on the browser', () => {
            clickElement('click', 'element', element, done);

            assert(browser.click.calledWith(element));

            assert(done.calledOnce);
        });

        it('should call doubleClick on the browser', () => {
            clickElement('doubleClick', 'element', element, done);

            assert(browser.doubleClick.calledWith(element));

            assert(done.calledOnce);
        });

        it('should click a link when type is `link`', () => {
            clickElement('click', 'link', element, done);

            assert(browser.click.calledWith(`=${element}`));

            assert(done.calledOnce);
        });
    }
);
