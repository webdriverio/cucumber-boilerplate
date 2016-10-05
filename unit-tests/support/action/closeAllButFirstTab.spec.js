const sinon = require('sinon');
const chai = require('chai');
const assert = chai.assert;
const closeAllButFirstTab = require('../../../test/support/action/closeAllButFirstTab');

describe(
    'closeAllButFirstTab', () => {
        let done, mock;

        beforeEach(() => {
            global.browser = {
                windowHandles: function(){},
                switchTab: function() {}
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

            sinon.stub(
                global.browser,
                'switchTab',
                function() {
                    return {
                        close: function() {}
                    };
                }
            );

            done = sinon.mock();
        });

        it('should call closeAllButFirstTab on the browser', () => {
            closeAllButFirstTab('', done);

            assert(global.browser.windowHandles.calledOnce);

            assert(global.browser.switchTab.calledTwice);

            assert(done.called);
        });
    }
);
