// ********RoostGPT********
/*
Test generated by RoostGPT for test advancedReportTest using AI Type  and AI Model 

ROOST_METHOD_HASH=Zc_45b5d3baf5
ROOST_METHOD_SIG_HASH=Zc_8db88d2555


*/

// ********RoostGPT********
const angular = require('../src/public/javascripts/library/angular.min.js');

describe('Zc function', () => {
  let mockWindow;

  beforeEach(() => {
    mockWindow = {
      angular: {}
    };
  });

  test('should create angular.module function if it does not exist', () => {
    angular.Zc(mockWindow);
    expect(typeof mockWindow.angular.module).toBe('function');
  });

  test('should not overwrite existing angular.module function', () => {
    const existingModule = () => {};
    mockWindow.angular.module = existingModule;
    angular.Zc(mockWindow);
    expect(mockWindow.angular.module).toBe(existingModule);
  });

  test('should create $minErr function if it does not exist', () => {
    angular.Zc(mockWindow);
    expect(typeof mockWindow.angular.$minErr).toBe('function');
  });

  test('should not overwrite existing $minErr function', () => {
    const existingMinErr = () => {};
    mockWindow.angular.$minErr = existingMinErr;
    angular.Zc(mockWindow);
    expect(mockWindow.angular.$minErr).toBe(existingMinErr);
  });

  describe('angular.module function', () => {
    beforeEach(() => {
      angular.Zc(mockWindow);
    });

    test('should throw error for invalid module name', () => {
      expect(() => {
        mockWindow.angular.module('hasOwnProperty');
      }).toThrow();
    });

    test('should create a new module', () => {
      const module = mockWindow.angular.module('testModule', []);
      expect(module).toBeDefined();
      expect(module.name).toBe('testModule');
    });

    test('should return existing module if called with only module name', () => {
      const originalModule = mockWindow.angular.module('testModule', []);
      const retrievedModule = mockWindow.angular.module('testModule');
      expect(retrievedModule).toBe(originalModule);
    });

    test('should overwrite existing module if called with dependencies', () => {
      const originalModule = mockWindow.angular.module('testModule', []);
      const newModule = mockWindow.angular.module('testModule', ['dep1', 'dep2']);
      expect(newModule).not.toBe(originalModule);
    });

    test('should create module with correct structure', () => {
      const module = mockWindow.angular.module('testModule', []);
      expect(module._invokeQueue).toEqual([]);
      expect(module._runBlocks).toEqual([]);
      expect(module.requires).toEqual([]);
      expect(typeof module.provider).toBe('function');
      expect(typeof module.factory).toBe('function');
      expect(typeof module.service).toBe('function');
      expect(typeof module.value).toBe('function');
      expect(typeof module.constant).toBe('function');
      expect(typeof module.animation).toBe('function');
      expect(typeof module.filter).toBe('function');
      expect(typeof module.controller).toBe('function');
      expect(typeof module.directive).toBe('function');
      expect(typeof module.config).toBe('function');
      expect(typeof module.run).toBe('function');
    });

    test('should execute config function immediately', () => {
      const configFn = jest.fn();
      mockWindow.angular.module('testModule', [], configFn);
      expect(configFn).toHaveBeenCalled();
    });

    test('should add run block to _runBlocks array', () => {
      const runFn = jest.fn();
      const module = mockWindow.angular.module('testModule', []);
      module.run(runFn);
      expect(module._runBlocks).toContain(runFn);
    });
  });
});