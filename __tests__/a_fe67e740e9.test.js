// ********RoostGPT********
/*
Test generated by RoostGPT for test advancedReportTest using AI Type  and AI Model 

ROOST_METHOD_HASH=a_c071537c88
ROOST_METHOD_SIG_HASH=a_fe67e740e9


*/

// ********RoostGPT********
const angular = require('../../../src/public/javascripts/library/angular.min.js');

describe('a function', () => {
  let a, b, c;

  beforeEach(() => {
    jest.resetModules();
    jest.clearAllMocks();
    ({ a, b, c } = angular);
  });

  test('should set c to true and call b when c is initially false', () => {
    c = false;
    const mockB = jest.fn();
    b = mockB;

    a();

    expect(c).toBe(true);
    expect(mockB).toHaveBeenCalledTimes(1);
  });

  test('should not call b when c is already true', () => {
    c = true;
    const mockB = jest.fn();
    b = mockB;

    a();

    expect(c).toBe(true);
    expect(mockB).not.toHaveBeenCalled();
  });

  test('should handle multiple calls to a', () => {
    c = false;
    const mockB = jest.fn();
    b = mockB;

    a();
    a();
    a();

    expect(c).toBe(true);
    expect(mockB).toHaveBeenCalledTimes(1);
  });

  test('should work correctly when b is not a function', () => {
    c = false;
    b = 'not a function';

    expect(() => a()).not.toThrow();
    expect(c).toBe(true);
  });

  test('should handle b throwing an error', () => {
    c = false;
    b = jest.fn(() => {
      throw new Error('Test error');
    });

    expect(() => a()).toThrow('Test error');
    expect(c).toBe(true);
  });
});
