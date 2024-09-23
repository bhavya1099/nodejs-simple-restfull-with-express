// ********RoostGPT********
/*
Test generated by RoostGPT for test advancedReportTest using AI Type  and AI Model 

ROOST_METHOD_HASH=ec_48e1e18426
ROOST_METHOD_SIG_HASH=ec_6304db11f1


*/

// ********RoostGPT********
const { ec } = require('../src/public/javascripts/library/angular.min.js');

describe('ec function', () => {
  test('should return the original object when no path is provided', () => {
    const obj = { a: 1 };
    expect(ec(obj)).toBe(obj);
  });

  test('should return undefined for non-existent path', () => {
    const obj = { a: 1 };
    expect(ec(obj, 'b.c')).toBeUndefined();
  });

  test('should return nested property value', () => {
    const obj = { a: { b: { c: 42 } } };
    expect(ec(obj, 'a.b.c')).toBe(42);
  });

  test('should return the last valid nested property when path is partially valid', () => {
    const obj = { a: { b: 42 } };
    expect(ec(obj, 'a.b.c')).toBeUndefined();
  });

  test('should not invoke function when c is true', () => {
    const mockFn = jest.fn();
    const obj = { a: { b: mockFn } };
    ec(obj, 'a.b', true);
    expect(mockFn).not.toHaveBeenCalled();
  });

  test('should invoke zb when result is a function and c is falsy', () => {
    const mockZb = jest.fn();
    global.zb = mockZb;
    global.O = jest.fn().mockReturnValue(true);

    const mockFn = jest.fn();
    const obj = { a: { b: mockFn } };
    ec(obj, 'a.b');

    expect(mockZb).toHaveBeenCalledWith(obj.a, mockFn);

    delete global.zb;
    delete global.O;
  });

  test('should handle empty path segments', () => {
    const obj = { '': { '': 42 } };
    expect(ec(obj, '.')).toBe(42);
  });

  test('should return undefined for null or undefined input object', () => {
    expect(ec(null, 'a.b')).toBeUndefined();
    expect(ec(undefined, 'a.b')).toBeUndefined();
  });

  test('should handle array index access', () => {
    const obj = { a: [10, 20, 30] };
    expect(ec(obj, 'a.1')).toBe(20);
  });

  test('should return the original object for empty path', () => {
    const obj = { a: 1 };
    expect(ec(obj, '')).toBe(obj);
  });
});
