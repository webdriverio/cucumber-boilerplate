const sinon = require('sinon');
const chai = require('chai');
const assert = chai.assert;
const dragElement = require('../../../test/support/action/dragElement');

describe(
    'dragElement', () => {
        let done;

        beforeEach(() => {
            global.browser = {
                dragAndDrop: sinon.mock()
            };

            done = sinon.mock();
        });

        it('should call dragAndDrop on the browser', () => {
            dragElement('source', 'destination', done);

            assert(global.browser.dragAndDrop.calledOnce);

            assert(
                global.browser.dragAndDrop.calledWith('source', 'destination')
            );

            assert(done.calledOnce);
        });
    }
);
