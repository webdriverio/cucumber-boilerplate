const sinon = require('sinon');
const chai = require('chai');
const assert = chai.assert;
const closeLastOpenedWindow = require('../../../test/support/action/closeLastOpenedWindow');

describe(
    'closeLastOpenedWindow', () => {
        let done, mock;

        beforeEach(() => {
            global.browser = {
                windowHandles: function(){},
                window: sinon.stub(),
                close: sinon.stub()
            };

            sinon.stub(
                global.browser,
                'windowHandles',
                function() {
                    return {
                        value: [
                            'one',
                            'two',
                            'three'
                        ]
                    };
                }
            );

            done = sinon.mock();
        });

        it('should call closeLastOpenedWindow on the browser', () => {
            closeLastOpenedWindow('', done);

            assert(global.browser.windowHandles.calledOnce);

            assert(global.browser.window.calledOnce);

            assert(global.browser.window.calledWith('three'));

            assert(global.browser.close.calledOnce);

            assert(done.calledOnce);
        });
    }
);
