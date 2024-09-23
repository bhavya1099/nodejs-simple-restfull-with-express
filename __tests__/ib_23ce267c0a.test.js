// ********RoostGPT********
/*
Test generated by RoostGPT for test advancedReportTest using AI Type  and AI Model 

ROOST_METHOD_HASH=ib_2ca987300c
ROOST_METHOD_SIG_HASH=ib_23ce267c0a


*/

// ********RoostGPT********
const angular = require('../src/public/javascripts/library/angular.min.js');
const ib = angular.ib;

describe('ib function', () => {
  let element;

  beforeEach(() => {
    element = document.createElement('div');
  });

  test('should add class to element', () => {
    ib(element, 'test-class');
    expect(element.getAttribute('class')).toBe('test-class');
  });

  test('should add multiple classes to element', () => {
    ib(element, 'class1 class2');
    expect(element.getAttribute('class')).toBe('class1 class2');
  });

  test('should not duplicate existing classes', () => {
    element.setAttribute('class', 'existing-class');
    ib(element, 'existing-class new-class');
    expect(element.getAttribute('class')).toBe('existing-class new-class');
  });

  test('should remove newlines and tabs from class attribute', () => {
    element.setAttribute('class', 'class1\nclass2\tclass3');
    ib(element, 'class4');
    expect(element.getAttribute('class')).toBe('class1 class2 class3 class4');
  });

  test('should handle empty string input', () => {
    ib(element, '');
    expect(element.getAttribute('class')).toBe('');
  });

  test('should handle null input', () => {
    ib(element, null);
    expect(element.getAttribute('class')).toBeNull();
  });

  test('should handle undefined input', () => {
    ib(element, undefined);
    expect(element.getAttribute('class')).toBeNull();
  });

  test('should handle element without existing class attribute', () => {
    ib(element, 'new-class');
    expect(element.getAttribute('class')).toBe('new-class');
  });

  test('should trim whitespace from class names', () => {
    ib(element, '  class1   class2  ');
    expect(element.getAttribute('class')).toBe('class1 class2');
  });

  test('should not modify element if second parameter is falsy', () => {
    element.setAttribute('class', 'original-class');
    ib(element, false);
    expect(element.getAttribute('class')).toBe('original-class');
  });
});