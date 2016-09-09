module.exports = (selectionType, selectionValue, selectElem, done) => {
    const commandArguments = [
        selectElem,
        selectionValue,
    ];
    const element = browser.element(selectElem);

    let command;

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
            throw new Error(`Unknown selection type "${selectionType}"`);
        }
    }

    element[command].apply(this, commandArguments);

    done();
};
