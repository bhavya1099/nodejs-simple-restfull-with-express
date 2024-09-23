// ********RoostGPT********
/*
Test generated by RoostGPT for test advancedReportTest using AI Type  and AI Model 

ROOST_METHOD_HASH=$b_8d7556071a
ROOST_METHOD_SIG_HASH=$b_42e6a2bf48


*/

// ********RoostGPT********
import { $b } from '../../../src/public/javascripts/library/angular.min.js';

describe('$b function', () => {
  let mockY;
  let originalY;

  beforeEach(() => {
    mockY = jest.fn();
    originalY = global.y;
    global.y = mockY;
  });

  afterEach(() => {
    global.y = originalY;
  });

  test('should return parsed JSON when input is a string and y returns true', () => {
    const input = '{"key": "value"}';
    mockY.mockReturnValue(true);
    
    const result = $b(input);
    
    expect(mockY).toHaveBeenCalledWith(input);
    expect(result).toEqual({ key: 'value' });
  });

  test('should return input as-is when y returns false', () => {
    const input = { key: 'value' };
    mockY.mockReturnValue(false);
    
    const result = $b(input);
    
    expect(mockY).toHaveBeenCalledWith(input);
    expect(result).toBe(input);
  });

  test('should handle null input', () => {
    const input = null;
    mockY.mockReturnValue(false);
    
    const result = $b(input);
    
    expect(mockY).toHaveBeenCalledWith(input);
    expect(result).toBeNull();
  });

  test('should handle undefined input', () => {
    const input = undefined;
    mockY.mockReturnValue(false);
    
    const result = $b(input);
    
    expect(mockY).toHaveBeenCalledWith(input);
    expect(result).toBeUndefined();
  });

  test('should throw error for invalid JSON string', () => {
    const input = '{"key": "value"';
    mockY.mockReturnValue(true);
    
    expect(() => $b(input)).toThrow(SyntaxError);
    expect(mockY).toHaveBeenCalledWith(input);
  });

  test('should handle empty string input', () => {
    const input = '';
    mockY.mockReturnValue(true);
    
    expect(() => $b(input)).toThrow(SyntaxError);
    expect(mockY).toHaveBeenCalledWith(input);
  });

  test('should handle number input', () => {
    const input = 42;
    mockY.mockReturnValue(false);
    
    const result = $b(input);
    
    expect(mockY).toHaveBeenCalledWith(input);
    expect(result).toBe(42);
  });

  test('should handle boolean input', () => {
    const input = true;
    mockY.mockReturnValue(false);
    
    const result = $b(input);
    
    expect(mockY).toHaveBeenCalledWith(input);
    expect(result).toBe(true);
  });

  test('should handle array input', () => {
    const input = [1, 2, 3];
    mockY.mockReturnValue(false);
    
    const result = $b(input);
    
    expect(mockY).toHaveBeenCalledWith(input);
    expect(result).toEqual([1, 2, 3]);
  });
});
