// ********RoostGPT********
/*
Test generated by RoostGPT for test advancedReportTest using AI Type  and AI Model 

ROOST_METHOD_HASH=cc_8a42c359b0
ROOST_METHOD_SIG_HASH=cc_7c4283b8ea


*/

// ********RoostGPT********
const { cc } = require('../../../src/public/javascripts/library/angular.min.js');

describe('cc function', () => {
  let mockB, mockA, mockX, mockInjector, mockGa, mockRa, mockDc, mockInvoke, mockApply, mockData, mockCompile;

  beforeEach(() => {
    mockB = {
      injector: jest.fn(),
      data: jest.fn()
    };
    mockA = [];
    mockX = jest.fn().mockReturnValue(mockB);
    mockInjector = jest.fn();
    mockGa = jest.fn();
    mockRa = jest.fn();
    mockDc = jest.fn().mockReturnValue({ invoke: mockInvoke });
    mockInvoke = jest.fn();
    mockApply = jest.fn();
    mockData = jest.fn();
    mockCompile = jest.fn().mockReturnValue(jest.fn());

    global.x = mockX;
    global.ga = mockGa;
    global.Ra = mockRa;
    global.dc = mockDc;
    global.T = { name: 'test' };
    global.Ta = { resumeBootstrap: jest.fn() };
    global.q = jest.fn();
    global.V = 'document';
  });

  test('should throw error if b has injector', () => {
    mockB.injector.mockReturnValue(true);
    expect(() => cc(mockB, mockA)).toThrow();
    expect(mockRa).toHaveBeenCalledWith('btstrpd', 'document');
  });

  test('should create and invoke compiler', () => {
    const result = cc(mockB, mockA);
    expect(mockA).toHaveLength(2);
    expect(mockDc).toHaveBeenCalledWith(['ng', expect.any(Array)]);
    expect(mockInvoke).toHaveBeenCalledWith(expect.any(Array));
    expect(result).toBe(mockDc.mock.results[0].value);
  });

  test('should handle NG_DEFER_BOOTSTRAP', () => {
    global.T.name = 'NG_DEFER_BOOTSTRAP!test';
    cc(mockB, mockA);
    expect(global.T.name).toBe('test');
    expect(global.Ta.resumeBootstrap).toBeDefined();
  });

  test('resumeBootstrap should work correctly', () => {
    global.T.name = 'NG_DEFER_BOOTSTRAP!test';
    cc(mockB, mockA);
    const mockNewA = ['newItem'];
    global.Ta.resumeBootstrap(mockNewA);
    expect(global.q).toHaveBeenCalledWith(mockNewA, expect.any(Function));
    expect(mockA).toContain('newItem');
  });
});