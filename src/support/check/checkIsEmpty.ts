import type { Selector } from 'webdriverio';

import checkContainsAnyText from './checkContainsAnyText.js';

export default async (
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

    await checkContainsAnyText(elementType, element, newFalseCase);
};
