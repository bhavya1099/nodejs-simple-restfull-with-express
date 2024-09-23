// ********RoostGPT********
/*
Test generated by RoostGPT for test advancedReportTest using AI Type  and AI Model 

ROOST_METHOD_HASH=hb_f1d3985642
ROOST_METHOD_SIG_HASH=hb_80cf45f1aa


*/

// ********RoostGPT********
const angular = require('../../../src/public/javascripts/library/angular.min.js');
const hb = angular.hb;

describe('hb function', () => {
  test('should convert camelCase to snake_case with default separator', () => {
    expect(hb('camelCase')).toBe('camel_case');
    expect(hb('thisIsALongString')).toBe('this_is_a_long_string');
  });

  test('should convert camelCase to snake_case with custom separator', () => {
    expect(hb('camelCase', '-')).toBe('camel-case');
    expect(hb('thisIsALongString', '.')).toBe('this.is.a.long.string');
  });

  test('should handle strings with no uppercase letters', () => {
    expect(hb('lowercase')).toBe('lowercase');
    expect(hb('lowercase', '-')).toBe('lowercase');
  });

  test('should handle strings with all uppercase letters', () => {
    expect(hb('UPPERCASE')).toBe('uppercase');
    expect(hb('UPPERCASE', '-')).toBe('uppercase');
  });

  test('should handle strings with consecutive uppercase letters', () => {
    expect(hb('ABCTest')).toBe('abc_test');
    expect(hb('ABCTest', '-')).toBe('abc-test');
  });

  test('should handle empty strings', () => {
    expect(hb('')).toBe('');
    expect(hb('', '-')).toBe('');
  });

  test('should handle strings with special characters', () => {
    expect(hb('special!@#Case')).toBe('special!@#_case');
    expect(hb('special!@#Case', '-')).toBe('special!@#-case');
  });

  test('should handle strings starting with uppercase letter', () => {
    expect(hb('CamelCase')).toBe('camel_case');
    expect(hb('CamelCase', '-')).toBe('camel-case');
  });

  test('should handle strings with numbers', () => {
    expect(hb('camel123Case')).toBe('camel123_case');
    expect(hb('camel123Case', '-')).toBe('camel123-case');
  });

  test('should handle edge cases', () => {
    expect(hb('a')).toBe('a');
    expect(hb('A')).toBe('a');
    expect(hb('aA')).toBe('a_a');
    expect(hb('aA', '-')).toBe('a-a');
  });
});
