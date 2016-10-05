const sinon = require('sinon');
const chai = require('chai');
const assert = chai.assert;
const focusLastOpenedWindow = require('../../../test/support/action/focusLastOpenedWindow');

describe(
    'focusLastOpenedWindow', () => {
        let done, mock;

        beforeEach(() => {
            global.browser = {
                windowHandles: function(){},
                window: sinon.stub()
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

        it('should call focusLastOpenedWindow on the browser', () => {
            focusLastOpenedWindow('', done);

            assert(global.browser.windowHandles.calledOnce);

            assert(global.browser.window.calledOnce);

            assert(global.browser.window.calledWith('three'));

            assert(done.calledOnce);
        });
    }
);
