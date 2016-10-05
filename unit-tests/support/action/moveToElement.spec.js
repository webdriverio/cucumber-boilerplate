const sinon = require('sinon');
const chai = require('chai');
const assert = chai.assert;
const moveToElement = require('../../../test/support/action/moveToElement');

describe(
    'moveToElement', () => {
        let done;

        beforeEach(() => {
            global.browser = {
                moveToObject: sinon.mock()
            };

            done = sinon.mock();
        });

        it(
            'should call moveToObject with only the element when no x and y ' +
            'are provided',
            () => {
                moveToElement('element', '', undefined, undefined, done);

                assert(global.browser.moveToObject.calledOnce);
                assert(global.browser.moveToObject.calledWith('element'));

                assert(done.calledOnce);
            }
        );

        it(
            'should call moveToObject with x when provided as int',
            () => {
                 moveToElement('element', '', 1, undefined, done);

                assert(global.browser.moveToObject.calledOnce);
                assert(
                    global.browser.moveToObject.calledWith('element', 1)
                );

                assert(done.calledOnce);
            }
        );

        it(
            'should call moveToObject with y when provided as int',
            () => {
                 moveToElement('element', '', undefined, 1, done);

                assert(global.browser.moveToObject.calledOnce);
                assert(
                    global.browser.moveToObject.calledWith(
                        'element',
                        undefined,
                        1
                    )
                );

                assert(done.calledOnce);
            }
        );

        it(
            'should call moveToObject with x and y when provided as int',
            () => {
                 moveToElement('element', '', 1, 2, done);

                assert(global.browser.moveToObject.calledOnce);
                assert(
                    global.browser.moveToObject.calledWith(
                        'element',
                        1,
                        2
                    )
                );

                assert(done.calledOnce);
            }
        );
    }
);
