// ********RoostGPT********
/*
Test generated by RoostGPT for test advancedReportTest using AI Type  and AI Model 

ROOST_METHOD_HASH=bc_010dadd049
ROOST_METHOD_SIG_HASH=bc_cbe49a1ed5


*/

// ********RoostGPT********
const angular = require('../src/public/javascripts/library/angular.min.js');

describe('bc function', () => {
  const bc = angular.bc;

  test('should parse empty string', () => {
    expect(bc('')).toEqual({});
  });

  test('should parse single key-value pair', () => {
    expect(bc('foo=bar')).toEqual({ foo: 'bar' });
  });

  test('should parse multiple key-value pairs', () => {
    expect(bc('foo=bar&baz=qux')).toEqual({ foo: 'bar', baz: 'qux' });
  });

  test('should handle keys without values', () => {
    expect(bc('foo&bar=baz')).toEqual({ foo: true, bar: 'baz' });
  });

  test('should handle URL-encoded keys and values', () => {
    expect(bc('foo%20bar=baz%20qux')).toEqual({ 'foo bar': 'baz qux' });
  });

  test('should handle repeated keys as arrays', () => {
    expect(bc('foo=bar&foo=baz')).toEqual({ foo: ['bar', 'baz'] });
  });

  test('should handle mixed repeated and non-repeated keys', () => {
    expect(bc('foo=bar&foo=baz&qux=quux')).toEqual({ foo: ['bar', 'baz'], qux: 'quux' });
  });

  test('should handle empty values', () => {
    expect(bc('foo=&bar=')).toEqual({ foo: '', bar: '' });
  });

  test('should handle special characters in keys and values', () => {
    expect(bc('foo!@#$%^&*()=bar!@#$%^&*()')).toEqual({ 'foo!@#$%^&*()': 'bar!@#$%^&*()' });
  });

  test('should handle null input', () => {
    expect(bc(null)).toEqual({});
  });

  test('should handle undefined input', () => {
    expect(bc(undefined)).toEqual({});
  });

  test('should handle non-string input', () => {
    expect(bc(123)).toEqual({});
  });

  test('should handle malformed input', () => {
    expect(bc('foo=bar&=baz&qux')).toEqual({ foo: 'bar', '': 'baz', qux: true });
  });
});