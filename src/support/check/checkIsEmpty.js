import checkContainsAnyText from './checkContainsAnyText';

module.exports = (element, falseCase) => {
    let newFalseCase = true;

    if (typeof falseCase === 'function') {
        newFalseCase = false;
    } else if (falseCase === ' not') {
        newFalseCase = false;
    }

    checkContainsAnyText(element, newFalseCase);
};
