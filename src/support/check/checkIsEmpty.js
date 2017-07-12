import checkContainsAnyText from './checkContainsAnyText';

module.exports = (element, falseCase, done) => {
    let newFalseCase = true;
    let newDone = done;

    if (typeof falseCase === 'function') {
        newDone = falseCase;
        newFalseCase = false;
    } else if (falseCase === ' not') {
        newFalseCase = false;
    }

    return checkContainsAnyText(element, newFalseCase, newDone);
};
