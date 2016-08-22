/*
    I select the option with the (name|value|text) "$string" of element "$string"
 */
module.exports = (selectionType, selectionValue, selectElem, done) => {
    var command;

    commandArguments = [
        selectElem,
        selectionValue
    ];

    switch (selectionType) {
        case 'name' : {
            command = 'selectByAttribute';

            // The selectByAttribute command expects the attribute name as it
            // second argument so let's add it
            commandArguments.splice(1, 0, 'name');

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

    browser[command].apply(this, commandArguments)

    done();
};
