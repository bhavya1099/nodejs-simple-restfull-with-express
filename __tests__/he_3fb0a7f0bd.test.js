import { he } from '../../../src/public/javascripts/library/angular.min.js';

describe('he function', () => {
  let mockRAF;
  let mockTimeout;

  beforeEach(() => {
    mockRAF = jest.fn();
    mockTimeout = jest.fn();
  });

  test('should return a function that uses $rAF when supported', () => {
    mockRAF.supported = true;
    const result = he().$get[1](mockRAF, mockTimeout);
    
    const callback = jest.fn();
    result(callback);
    
    expect(mockRAF).toHaveBeenCalledWith(callback);
    expect(mockTimeout).not.toHaveBeenCalled();
  });

  test('should return a function that uses $timeout when $rAF is not supported', () => {
    mockRAF.supported = false;
    const result = he().$get[1](mockRAF, mockTimeout);
    
    const callback = jest.fn();
    result(callback);
    
    expect(mockTimeout).toHaveBeenCalledWith(callback, 0, false);
    expect(mockRAF).not.toHaveBeenCalled();
  });

  test('should return a function that can be called multiple times', () => {
    mockRAF.supported = true;
    const result = he().$get[1](mockRAF, mockTimeout);
    
    const callback1 = jest.fn();
    const callback2 = jest.fn();
    
    result(callback1);
    result(callback2);
    
    expect(mockRAF).toHaveBeenCalledTimes(2);
    expect(mockRAF).toHaveBeenCalledWith(callback1);
    expect(mockRAF).toHaveBeenCalledWith(callback2);
  });

  test('should handle different types of callbacks', () => {
    mockRAF.supported = true;
    const result = he().$get[1](mockRAF, mockTimeout);
    
    const arrowCallback = () => {};
    const regularCallback = function() {};
    const asyncCallback = async () => {};
    
    result(arrowCallback);
    result(regularCallback);
    result(asyncCallback);
    
    expect(mockRAF).toHaveBeenCalledTimes(3);
    expect(mockRAF).toHaveBeenCalledWith(arrowCallback);
    expect(mockRAF).toHaveBeenCalledWith(regularCallback);
    expect(mockRAF).toHaveBeenCalledWith(asyncCallback);
  });

  test('should return undefined when called', () => {
    mockRAF.supported = true;
    const result = he().$get[1](mockRAF, mockTimeout);
    
    const returnValue = result(() => {});
    
    expect(returnValue).toBeUndefined();
  });
});
