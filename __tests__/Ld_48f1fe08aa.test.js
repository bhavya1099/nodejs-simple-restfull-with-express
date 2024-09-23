// ********RoostGPT********
/*
Test generated by RoostGPT for test advancedReportTest using AI Type  and AI Model 

ROOST_METHOD_HASH=Ld_1fcd6fd583
ROOST_METHOD_SIG_HASH=Ld_48f1fe08aa


*/

// ********RoostGPT********
const angular = require('../../../src/public/javascripts/library/angular.min.js');

describe('Ld function', () => {
  let $window, $location, $rootScope, Ld;

  beforeEach(() => {
    $window = {
      document: {
        getElementById: jest.fn(),
        getElementsByName: jest.fn(),
      },
      scrollTo: jest.fn(),
    };
    $location = {
      hash: jest.fn(),
    };
    $rootScope = {
      $watch: jest.fn(),
      $evalAsync: jest.fn(),
    };
    Ld = angular.module('testModule', []).service('testService', Ld).get('testService');
  });

  test('should create a service with disableAutoScrolling method', () => {
    expect(typeof Ld.disableAutoScrolling).toBe('function');
  });

  test('should disable auto scrolling when disableAutoScrolling is called', () => {
    Ld.disableAutoScrolling();
    $location.hash.mockReturnValue('test');
    $rootScope.$watch.mock.calls[0][1]();
    expect($rootScope.$evalAsync).not.toHaveBeenCalled();
  });

  test('should scroll to element when hash is present and element exists', () => {
    const mockElement = { scrollIntoView: jest.fn() };
    $window.document.getElementById.mockReturnValue(mockElement);
    $location.hash.mockReturnValue('test');
    
    $rootScope.$watch.mock.calls[0][1]();
    $rootScope.$evalAsync.mock.calls[0][0]();

    expect(mockElement.scrollIntoView).toHaveBeenCalled();
  });

  test('should scroll to named element when hash is present and id does not exist', () => {
    const mockElement = { scrollIntoView: jest.fn() };
    $window.document.getElementById.mockReturnValue(null);
    $window.document.getElementsByName.mockReturnValue([mockElement]);
    $location.hash.mockReturnValue('test');
    
    $rootScope.$watch.mock.calls[0][1]();
    $rootScope.$evalAsync.mock.calls[0][0]();

    expect(mockElement.scrollIntoView).toHaveBeenCalled();
  });

  test('should scroll to top when hash is "top"', () => {
    $location.hash.mockReturnValue('top');
    
    $rootScope.$watch.mock.calls[0][1]();
    $rootScope.$evalAsync.mock.calls[0][0]();

    expect($window.scrollTo).toHaveBeenCalledWith(0, 0);
  });

  test('should scroll to top when hash is empty', () => {
    $location.hash.mockReturnValue('');
    
    $rootScope.$watch.mock.calls[0][1]();
    $rootScope.$evalAsync.mock.calls[0][0]();

    expect($window.scrollTo).toHaveBeenCalledWith(0, 0);
  });

  test('should watch for hash changes', () => {
    expect($rootScope.$watch).toHaveBeenCalled();
    expect($rootScope.$watch.mock.calls[0][0]).toEqual(expect.any(Function));
    expect($rootScope.$watch.mock.calls[0][1]).toEqual(expect.any(Function));
  });
});
