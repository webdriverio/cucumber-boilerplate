import type { Selector } from 'webdriverio';

import checkContainsAnyText from './checkContainsAnyText';

export default (
    elementType: 'button' | 'element',
    element: Selector,
    falseCase: ' not'
) => {
    let newFalseCase = true;

    if (typeof falseCase === 'function') {
        newFalseCase = false;
    } else if (falseCase === ' not') {
        newFalseCase = false;
    }

    checkContainsAnyText(elementType, element, newFalseCase);
};
