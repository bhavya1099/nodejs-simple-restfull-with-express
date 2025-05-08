// Import the necessary modules
const { D } = require('../../src/public/javascripts/library/angular-resource.min.js');
const a = require('../../src/public/javascripts/library/a.js');

describe('Test suite for the D function', () => {

    test('should delete properties of the second object that are also present in the first object', () => {
        const p = { prop1: 'value1', prop2: 'value2'};
        const q = { prop1: 'value1', prop2: 'value2', prop3: 'value3'};

        const result = D(p, q);

        // Check if function deleted common properties in object q
        expect(result).toEqual({ prop3: 'value3' });
    });

    test('should delete properties of the second object that have $ as their first two characters', () => {
        const p = {};
        const q = { '$$prop': 'value' };

        const result = D(p, q);

        // Check if function deleted properties of object q that have $ as their first two characters
        expect(result).toEqual({});
    });

    test('should not delete properties if they are not contained in the first object or don\'t have $ as their first two characters', () => {
        const p = { prop1: 'value1' };
        const q = { prop2: 'value2' }

        const result = D(p, q);

        // Check if function kept the properties of the object q as is
        expect(result).toEqual({ prop2: 'value2' });
    });

    test('should return an object with the same properties as the second parameter if the first parameter is empty', () => {
        const p = {};
        const q = { prop1: 'value1', prop2: 'value2' };

        const result = D(p, q);

        // Check if function returned the second parameter as is
        expect(result).toEqual({ prop1: 'value1', prop2: 'value2' });
    });
});
