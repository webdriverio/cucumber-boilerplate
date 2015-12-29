/*
    I select the option with the (name|value|text) "$string" of element "$string"
 */
module.exports = function (selectionType, selectionValue, selectElem, done) {
    var command;

    switch (selectionType) {
        case 'name' : {
            command = 'selectByName';
            break;
        }

        case 'value' : {
            command = 'selectByValue';
            break;
        }

        case 'text' : {
            command = 'selectByVisibleText';
            break;
        }

        default: {
            throw new Exception('Unknown selection type `' + selectionType + '`!');
        }
    }

    this.browser[command](selectElem, selectionValue)
        .call(done);
};
