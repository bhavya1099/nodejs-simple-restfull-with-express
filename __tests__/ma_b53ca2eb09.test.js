// ********RoostGPT********
/*
Test generated by RoostGPT for test advancedReportTest using AI Type  and AI Model 

ROOST_METHOD_HASH=ma_ab4968fb24
ROOST_METHOD_SIG_HASH=ma_b53ca2eb09


*/

// ********RoostGPT********
const { ma } = require('../src/public/javascripts/library/angular.min.js');

describe('ma function', () => {
  let mockYa;
  let mockNe;

  beforeEach(() => {
    mockYa = {};
    mockNe = 0;
    global.Ya = mockYa;
    global.ne = mockNe;
  });

  test('should set value when c is defined', () => {
    const b = { ng339: 1 };
    const a = 'testKey';
    const c = 'testValue';

    ma(b, a, c);

    expect(mockYa[1][a]).toBe(c);
  });

  test('should create new entry in Ya when b.ng339 is undefined', () => {
    const b = {};
    const a = 'testKey';
    const c = 'testValue';

    ma(b, a, c);

    expect(b.ng339).toBe(1);
    expect(mockYa[1][a]).toBe(c);
    expect(mockNe).toBe(1);
  });

  test('should return undefined when c is undefined and Ya[d] is undefined', () => {
    const b = { ng339: 1 };
    const a = 'testKey';

    const result = ma(b, a);

    expect(result).toBeUndefined();
  });

  test('should return value from Ya when c is undefined and Ya[d][a] exists', () => {
    const b = { ng339: 1 };
    const a = 'testKey';
    mockYa[1] = { [a]: 'existingValue' };

    const result = ma(b, a);

    expect(result).toBe('existingValue');
  });

  test('should handle negative ng339 value', () => {
    const b = { ng339: -5 };
    const a = 'testKey';
    const c = 'testValue';

    ma(b, a, c);

    expect(b.ng339).toBe(1);
    expect(mockYa[1][a]).toBe(c);
    expect(mockNe).toBe(1);
  });

  test('should overwrite existing value in Ya', () => {
    const b = { ng339: 1 };
    const a = 'testKey';
    mockYa[1] = { [a]: 'oldValue' };

    ma(b, a, 'newValue');

    expect(mockYa[1][a]).toBe('newValue');
  });

  test('should handle multiple calls with same b object', () => {
    const b = {};
    const a1 = 'key1';
    const a2 = 'key2';

    ma(b, a1, 'value1');
    ma(b, a2, 'value2');

    expect(b.ng339).toBe(1);
    expect(mockYa[1][a1]).toBe('value1');
    expect(mockYa[1][a2]).toBe('value2');
  });

  test('should return undefined for non-existent key', () => {
    const b = { ng339: 1 };
    mockYa[1] = { existingKey: 'value' };

    const result = ma(b, 'nonExistentKey');

    expect(result).toBeUndefined();
  });
});
