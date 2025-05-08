const n = require('../src/public/javascripts/library/jquery-1.11.0.min');
const s = require('../src/public/javascripts/library/jquery-1.11.0.min').s;

describe('Function s tests', () => {
    test('should return false when given a function', () => {
        const fn = () => {};
        expect(s(fn)).toBe(false);
    });
    test('should return false when given window object', () => {
        expect(s(globalThis)).toBe(false);
    });
    test('should return true when given an array', () => {
        const array = [1, 2, 3];
        expect(s(array)).toBe(true);
    });
    test('should return false when given empty array', () => {
        const emptyArray = [];
        expect(s(emptyArray)).toBe(false);
    });
    test('should return false when given object', () => {
        const obj = {"key":"value"};
        expect(s(obj)).toBe(false);
    });
    test('should return true when given object with nodeType = 1', () => {
        const obj = {"nodeType": 1};
        expect(s(obj)).toBe(true);
    });
});
