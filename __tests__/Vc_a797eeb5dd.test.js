// ********RoostGPT********
/*
Test generated by RoostGPT for test advancedReportTest using AI Type  and AI Model 

ROOST_METHOD_HASH=Vc_499d039536
ROOST_METHOD_SIG_HASH=Vc_a797eeb5dd


*/

// ********RoostGPT********
const angular = require('../../../src/public/javascripts/library/angular.min.js');

describe('Vc function', () => {
  test('should apply the callback function to each element of the input array', () => {
    const inputArray = [1, 2, 3];
    const callback = (item) => item * 2;
    const context = {};

    const result = angular.Vc(inputArray, callback, context);

    expect(result).toEqual([2, 4, 6]);
  });

  test('should pass the correct arguments to the callback function', () => {
    const inputArray = ['a', 'b', 'c'];
    const callback = jest.fn();
    const context = {};

    angular.Vc(inputArray, callback, context);

    expect(callback).toHaveBeenCalledTimes(3);
    expect(callback).toHaveBeenNthCalledWith(1, 'a', 0, inputArray);
    expect(callback).toHaveBeenNthCalledWith(2, 'b', 1, inputArray);
    expect(callback).toHaveBeenNthCalledWith(3, 'c', 2, inputArray);
  });

  test('should use the provided context for the callback function', () => {
    const inputArray = [1, 2, 3];
    const context = { multiplier: 3 };
    const callback = function(item) {
      return item * this.multiplier;
    };

    const result = angular.Vc(inputArray, callback, context);

    expect(result).toEqual([3, 6, 9]);
  });

  test('should return an empty array if the input is an empty array', () => {
    const inputArray = [];
    const callback = jest.fn();
    const context = {};

    const result = angular.Vc(inputArray, callback, context);

    expect(result).toEqual([]);
    expect(callback).not.toHaveBeenCalled();
  });

  test('should handle non-array input by treating it as an object', () => {
    const inputObject = { a: 1, b: 2, c: 3 };
    const callback = (value, key) => `${key}:${value}`;
    const context = {};

    const result = angular.Vc(inputObject, callback, context);

    expect(result).toEqual(['a:1', 'b:2', 'c:3']);
  });

  test('should handle undefined input', () => {
    const callback = jest.fn();
    const context = {};

    const result = angular.Vc(undefined, callback, context);

    expect(result).toEqual([]);
    expect(callback).not.toHaveBeenCalled();
  });

  test('should handle null input', () => {
    const callback = jest.fn();
    const context = {};

    const result = angular.Vc(null, callback, context);

    expect(result).toEqual([]);
    expect(callback).not.toHaveBeenCalled();
  });

  test('should throw an error if callback is not a function', () => {
    const inputArray = [1, 2, 3];
    const callback = 'not a function';
    const context = {};

    expect(() => {
      angular.Vc(inputArray, callback, context);
    }).toThrow(TypeError);
  });
});
