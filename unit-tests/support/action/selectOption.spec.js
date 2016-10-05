const sinon = require('sinon');
const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;
const selectOption = require('../../../test/support/action/selectOption');

describe(
    'selectOption', () => {
        let done;

        const selectByAttribute = sinon.mock(),
            selectByValue = sinon.mock(),
            selectByVisibleText = sinon.mock();

        beforeEach(() => {
            global.browser = {
                element: function() {}
            };

            sinon.stub(
                global.browser,
                'element',
                function(element) {
                    return {
                        selectByAttribute: selectByAttribute,
                        selectByValue: selectByValue,
                        selectByVisibleText: selectByVisibleText
                    };
                }
            );

            done = sinon.mock();
        });

        it(
            'should call selectByAttribute on the browser object',
            () => {
                selectOption('name', 'option1', 'element1', done);

                assert(global.browser.element.calledOnce);
                assert(global.browser.element.calledWith('element1'));

                assert(selectByAttribute.calledOnce);
                assert(
                    selectByAttribute.calledWith(
                        'element1',
                        'name',
                        'option1'
                    )
                );

                assert(done.calledOnce);
            }
        );

                it(
            'should call selectByValue on the browser object',
            () => {
                selectOption('value', 'value1', 'element2', done);

                assert(global.browser.element.calledOnce);
                assert(global.browser.element.calledWith('element2'));

                assert(selectByValue.calledOnce);
                assert(
                    selectByValue.calledWith(
                        'element2',
                        'value1'
                    )
                );

                assert(done.calledOnce);
            }
        );

        it(
            'should call selectByVisibleText on the browser object',
            () => {
                selectOption('text', 'text1', 'element3', done);

                assert(global.browser.element.calledOnce);
                assert(global.browser.element.calledWith('element3'));

                assert(selectByVisibleText.calledOnce);
                assert(
                    selectByVisibleText.calledWith(
                        'element3',
                        'text1'
                    )
                );

                assert(done.calledOnce);
            }
        );

        it(
            'should throw an error when an unknown selection type is passed',
            () => {
                var spySelectOption = sinon.spy(selectOption);

                expect(
                    spySelectOption.bind(null, 'test', 'option1', 'element1', done)
                ).to.throw();

                assert(global.browser.element.calledOnce);
                assert(global.browser.element.calledWith('element1'));

                assert(!done.called);
            }
        );
    }
);
