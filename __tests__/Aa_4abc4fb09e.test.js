// ********RoostGPT********
/*
Test generated by RoostGPT for test advancedReportTest using AI Type  and AI Model 

ROOST_METHOD_HASH=Aa_bf812a5294
ROOST_METHOD_SIG_HASH=Aa_4abc4fb09e


*/

// ********RoostGPT********
const Aa = require('../../../src/public/javascripts/library/angular.min.js').Aa;

describe('Aa function', () => {
  test('replaces special characters correctly when second parameter is true', () => {
    const input = 'test@example.com:123$45,67 89';
    const expected = 'test@example.com:123$45,67%2089';
    expect(Aa(input, true)).toBe(expected);
  });

  test('replaces special characters correctly when second parameter is false', () => {
    const input = 'test@example.com:123$45,67 89';
    const expected = 'test@example.com:123$45,67+89';
    expect(Aa(input, false)).toBe(expected);
  });

  test('handles empty string input', () => {
    expect(Aa('', true)).toBe('');
    expect(Aa('', false)).toBe('');
  });

  test('handles input with no special characters', () => {
    const input = 'normalstring';
    expect(Aa(input, true)).toBe(input);
    expect(Aa(input, false)).toBe(input);
  });

  test('handles input with only special characters', () => {
    const input = '@:$, ';
    const expectedTrue = '@:$,%20';
    const expectedFalse = '@:$,+';
    expect(Aa(input, true)).toBe(expectedTrue);
    expect(Aa(input, false)).toBe(expectedFalse);
  });

  test('handles input with repeated special characters', () => {
    const input = '@@::$$,,  ';
    const expectedTrue = '@@::$$,,%20%20';
    const expectedFalse = '@@::$$,,++';
    expect(Aa(input, true)).toBe(expectedTrue);
    expect(Aa(input, false)).toBe(expectedFalse);
  });

  test('handles unicode characters', () => {
    const input = 'test😊@example.com';
    const expected = 'test%F0%9F%98%8A@example.com';
    expect(Aa(input, true)).toBe(expected);
    expect(Aa(input, false)).toBe(expected);
  });

  test('handles null input', () => {
    expect(() => Aa(null, true)).toThrow();
    expect(() => Aa(null, false)).toThrow();
  });

  test('handles undefined input', () => {
    expect(() => Aa(undefined, true)).toThrow();
    expect(() => Aa(undefined, false)).toThrow();
  });

  test('handles non-string input', () => {
    const input = 123;
    const expected = '123';
    expect(Aa(input, true)).toBe(expected);
    expect(Aa(input, false)).toBe(expected);
  });
});
