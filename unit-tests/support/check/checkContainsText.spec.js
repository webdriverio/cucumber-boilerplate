const sinon = require('sinon');
const chai = require('chai');
const assert = chai.assert;
const checkContainsText = require('../../../test/support/check/checkContainsText');

describe(
    'checkContainsText', () => {
        let done;
        let getTextStub;
        let getValueStub;
        let expectStub;
        let expectToBeEmptyStub;

        beforeEach(() => {
            global.browser = {
                getText: function () {},
                getValue: function () {},
            };

            getTextStub = sinon.stub(global.browser, 'getText');
            getTextStub.returns('text');

            getValueStub = sinon.stub(global.browser, 'getValue');
            getValueStub.returns('value');

            global.expect = function () {};

            expectToBeEmptyStub = {
                to: {
                    be: {
                        empty: sinon.spy(),
                    },
                    not: {
                        be: {
                            empty: sinon.spy(),
                        },
                    },
                },
            };

            expectStub = sinon.stub(global, 'expect').returns(expectToBeEmptyStub);

            done = sinon.mock();
        });

        it(
            'should call checkContainsText on the browser object',
            () => {
                checkContainsText('element', 'element1', false, done);

                getTextStub.restore();
                expectStub.restore();

                assert(getTextStub.calledOnce);
                assert(getTextStub.calledWith('element1'));

                assert(expectStub.calledOnce);
                assert(expectStub.calledWith('text'));

                assert(expectToBeEmptyStub.to.be.empty.calledOnce);
                assert(expectToBeEmptyStub.to.be.empty.calledWith());

                assert(done.calledOnce);
            }
        );

        it(
            'should call checkContainsText on the browser object',
            () => {
                checkContainsText('element', 'element1', true, done);

                getTextStub.restore();
                expectStub.restore();

                assert(getTextStub.calledOnce);
                assert(getTextStub.calledWith('element1'));

                assert(expectStub.calledOnce);
                assert(expectStub.calledWith('text'));

                assert(expectToBeEmptyStub.to.not.be.empty.calledOnce);
                assert(expectToBeEmptyStub.to.not.be.empty.calledWith());

                assert(done.calledOnce);
            }
        );



        it(
            'should call checkContainsText on the browser object',
            () => {
                checkContainsText('inputfield', 'element1', false, done);

                getValueStub.restore();
                expectStub.restore();

                assert(getValueStub.calledOnce);
                assert(getValueStub.calledWith('element1'));

                assert(expectStub.calledOnce);
                assert(expectStub.calledWith('value'));

                assert(expectToBeEmptyStub.to.be.empty.calledOnce);
                assert(expectToBeEmptyStub.to.be.empty.calledWith());

                assert(done.calledOnce);
            }
        );

        it(
            'should call checkContainsText on the browser object',
            () => {
                checkContainsText('inputfield', 'element1', true, done);

                getValueStub.restore();
                expectStub.restore();

                assert(getValueStub.calledOnce);
                assert(getValueStub.calledWith('element1'));

                assert(expectStub.calledOnce);
                assert(expectStub.calledWith('value'));

                assert(expectToBeEmptyStub.to.not.be.empty.calledOnce);
                assert(expectToBeEmptyStub.to.not.be.empty.calledWith());

                assert(done.calledOnce);
            }
        );
    }
);
