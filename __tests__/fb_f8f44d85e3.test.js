// ********RoostGPT********
/*
Test generated by RoostGPT for test advancedReportTest using AI Type  and AI Model 

ROOST_METHOD_HASH=fb_646619cc61
ROOST_METHOD_SIG_HASH=fb_f8f44d85e3


*/

// ********RoostGPT********
const { fb } = require('../../../src/public/javascripts/library/angular.min.js');

describe('fb function', () => {
  test('should return true for RegExp objects', () => {
    expect(fb(/test/)).toBe(true);
    expect(fb(new RegExp('test'))).toBe(true);
  });

  test('should return false for non-RegExp objects', () => {
    expect(fb('string')).toBe(false);
    expect(fb(123)).toBe(false);
    expect(fb({})).toBe(false);
    expect(fb([])).toBe(false);
    expect(fb(null)).toBe(false);
    expect(fb(undefined)).toBe(false);
    expect(fb(() => {})).toBe(false);
  });

  test('should handle edge cases', () => {
    expect(fb(Object.create(RegExp.prototype))).toBe(false);
    expect(fb({ toString: () => '[object RegExp]' })).toBe(false);
  });

  test('should work with inherited RegExp objects', () => {
    class CustomRegExp extends RegExp {}
    expect(fb(new CustomRegExp('test'))).toBe(true);
  });

  test('should handle RegExp objects with different flags', () => {
    expect(fb(/test/g)).toBe(true);
    expect(fb(/test/i)).toBe(true);
    expect(fb(/test/m)).toBe(true);
    expect(fb(/test/gi)).toBe(true);
  });

  test('should work with RegExp objects created using RegExp constructor', () => {
    expect(fb(new RegExp('test', 'g'))).toBe(true);
    expect(fb(new RegExp('test', 'i'))).toBe(true);
    expect(fb(new RegExp('test', 'm'))).toBe(true);
    expect(fb(new RegExp('test', 'gi'))).toBe(true);
  });
});
