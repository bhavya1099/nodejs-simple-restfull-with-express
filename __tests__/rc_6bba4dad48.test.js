// ********RoostGPT********
/*
Test generated by RoostGPT for test advancedReportTest using AI Type  and AI Model 

ROOST_METHOD_HASH=rc_ad66ec9efa
ROOST_METHOD_SIG_HASH=rc_6bba4dad48


*/

// ********RoostGPT********
const rc = require('../src/public/javascripts/library/angular.min.js').rc;

describe('rc function', () => {
  test('should handle function with $inject property', () => {
    const mockFunction = () => {};
    mockFunction.$inject = ['dep1', 'dep2'];
    
    const result = rc(mockFunction);
    
    expect(result).toEqual(['dep1', 'dep2']);
  });

  test('should parse function arguments for function without $inject', () => {
    const mockFunction = function(arg1, arg2) {};
    
    const result = rc(mockFunction);
    
    expect(result).toEqual(['arg1', 'arg2']);
  });

  test('should handle array notation', () => {
    const mockArray = ['dep1', 'dep2', () => {}];
    
    const result = rc(mockArray);
    
    expect(result).toEqual(['dep1', 'dep2']);
  });

  test('should throw error for invalid input', () => {
    expect(() => rc('not a function or array')).toThrow();
  });

  test('should handle empty function', () => {
    const emptyFunction = () => {};
    
    const result = rc(emptyFunction);
    
    expect(result).toEqual([]);
  });

  test('should handle function with complex argument names', () => {
    const complexFunction = function($scope, _$http_, $rootScope) {};
    
    const result = rc(complexFunction);
    
    expect(result).toEqual(['$scope', '_$http_', '$rootScope']);
  });

  test('should handle function with comments', () => {
    const functionWithComments = function(arg1 /* comment */, arg2) {};
    
    const result = rc(functionWithComments);
    
    expect(result).toEqual(['arg1', 'arg2']);
  });

  test('should handle arrow function', () => {
    const arrowFunction = (arg1, arg2) => {};
    
    const result = rc(arrowFunction);
    
    expect(result).toEqual(['arg1', 'arg2']);
  });

  test('should handle function with default parameters', () => {
    const functionWithDefaults = (arg1 = 'default', arg2 = 123) => {};
    
    const result = rc(functionWithDefaults);
    
    expect(result).toEqual(['arg1', 'arg2']);
  });

  test('should handle function with rest parameter', () => {
    const functionWithRest = (arg1, ...rest) => {};
    
    const result = rc(functionWithRest);
    
    expect(result).toEqual(['arg1', 'rest']);
  });
});