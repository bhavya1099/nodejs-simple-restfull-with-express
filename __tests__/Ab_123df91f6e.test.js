// ********RoostGPT********
/*
Test generated by RoostGPT for test advancedReportTest using AI Type  and AI Model 

ROOST_METHOD_HASH=Ab_8a0949d1c8
ROOST_METHOD_SIG_HASH=Ab_123df91f6e


*/

// ********RoostGPT********
const { Ab } = require('../src/public/javascripts/library/angular.min.js');

describe('Ab function', () => {
  test('should return an empty string for an empty object', () => {
    expect(Ab({})).toBe('');
  });

  test('should encode a simple key-value pair', () => {
    expect(Ab({ key: 'value' })).toBe('key=value');
  });

  test('should encode multiple key-value pairs', () => {
    expect(Ab({ key1: 'value1', key2: 'value2' })).toBe('key1=value1&key2=value2');
  });

  test('should handle boolean values', () => {
    expect(Ab({ key1: true, key2: false })).toBe('key1&key2=false');
  });

  test('should handle array values', () => {
    expect(Ab({ key: ['value1', 'value2'] })).toBe('key=value1&key=value2');
  });

  test('should handle mixed types', () => {
    expect(Ab({ key1: 'value1', key2: true, key3: ['value3', 'value4'] }))
      .toBe('key1=value1&key2&key3=value3&key3=value4');
  });

  test('should encode special characters', () => {
    expect(Ab({ 'key with spaces': 'value with &' })).toBe('key%20with%20spaces=value%20with%20%26');
  });

  test('should handle empty string values', () => {
    expect(Ab({ key: '' })).toBe('key=');
  });

  test('should handle null and undefined values', () => {
    expect(Ab({ key1: null, key2: undefined })).toBe('key1=null&key2=undefined');
  });

  test('should handle nested objects', () => {
    expect(Ab({ key: { nestedKey: 'nestedValue' } })).toBe('key=%5Bobject%20Object%5D');
  });

  test('should handle array of objects', () => {
    expect(Ab({ key: [{ id: 1 }, { id: 2 }] })).toBe('key=%5Bobject%20Object%5D&key=%5Bobject%20Object%5D');
  });
});
