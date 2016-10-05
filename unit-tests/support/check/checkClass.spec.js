const sinon = require('sinon');
const chai = require('chai');
const assert = chai.assert;
const checkClass = require('../../../test/support/check/checkClass');

describe(
    'checkClass', () => {
        let done;
        let getAttributeStub;
        let expectStub;
        let expectToIncludeStub;
        let expectToNotIncludeStub;

        beforeEach(() => {
            global.browser = {
                getAttribute: function () {},
            };

            getAttributeStub = sinon.stub(global.browser, 'getAttribute');

            getAttributeStub.returns('class1 class2');

            global.expect = function () {};

            expectToIncludeStub = {
                to: {
                    include: sinon.spy(),
                    not: {
                        include: sinon.spy(),
                    },
                },
            };

            expectStub = sinon.stub(global, 'expect').returns(expectToIncludeStub);

            done = sinon.mock();
        });

        it(
            'should call checkClass on the browser object',
            () => {
                checkClass('element1', false, 'class1', done);

                getAttributeStub.restore();
                expectStub.restore();

                assert(getAttributeStub.calledOnce);
                sinon.assert.calledWith(
                    getAttributeStub,
                    'element1',
                    'className'
                );

                assert(expectStub.calledOnce);
                assert(expectStub.calledWith(
                    [
                        'class1',
                        'class2',
                    ])
                );

                assert(expectToIncludeStub.to.include.calledOnce);
                assert(expectToIncludeStub.to.include.calledWith(
                    'class1',
                    'Element element1 should have the class class1'
                ));

                assert(done.calledOnce);
            }
        );

        it(
            'should call checkClass on the browser object',
            () => {
                checkClass('element1', false, 'class3', done);

                getAttributeStub.restore();
                expectStub.restore();

                assert(getAttributeStub.calledOnce);
                sinon.assert.calledWith(
                    getAttributeStub,
                    'element1',
                    'className'
                );

                assert(expectStub.calledOnce);
                assert(expectStub.calledWith(
                    [
                        'class1',
                        'class2',
                    ])
                );

                assert(expectToIncludeStub.to.include.calledOnce);
                assert(expectToIncludeStub.to.include.calledWith(
                    'class3',
                    'Element element1 should have the class class3'
                ));

                assert(done.calledOnce);
            }
        );



        it(
            'should call checkClass on the browser object',
            () => {
                checkClass('element1', true, 'class3', done);

                getAttributeStub.restore();
                expectStub.restore();

                assert(getAttributeStub.calledOnce);
                sinon.assert.calledWith(
                    getAttributeStub,
                    'element1',
                    'className'
                );

                assert(expectStub.calledOnce);
                assert(expectStub.calledWith(
                    [
                        'class1',
                        'class2',
                    ])
                );

                assert(expectToIncludeStub.to.not.include.calledOnce);
                assert(expectToIncludeStub.to.not.include.calledWith(
                    'class3',
                    'Element element1 should not have the class class3'
                ));

                assert(done.calledOnce);
            }
        );

        it(
            'should call checkClass on the browser object',
            () => {
                checkClass('element1', 'not', 'class1', done);

                getAttributeStub.restore();
                expectStub.restore();

                assert(getAttributeStub.calledOnce);
                sinon.assert.calledWith(
                    getAttributeStub,
                    'element1',
                    'className'
                );

                assert(expectStub.calledOnce);
                assert(expectStub.calledWith(
                    [
                        'class1',
                        'class2',
                    ])
                );

                assert(expectToIncludeStub.to.not.include.calledOnce);
                assert(expectToIncludeStub.to.not.include.calledWith(
                    'class1',
                    'Element element1 should not have the class class1'
                ));

                assert(done.calledOnce);
            }
        );
    }
);
