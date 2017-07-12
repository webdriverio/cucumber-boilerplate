import checkContainsAnyText from './checkContainsAnyText';

module.exports = (element, falseCase, done) => {
    let newFalseCase = true;
    let newDone = done;

    console.log(element, falseCase);

    if (typeof falseCase === 'function') {
        newDone = falseCase;
        newFalseCase = false;
    } else if (falseCase === ' not') {
        newFalseCase = false;
    }

    console.log(element, newFalseCase);

    return checkContainsAnyText(element, newFalseCase, newDone);
};
