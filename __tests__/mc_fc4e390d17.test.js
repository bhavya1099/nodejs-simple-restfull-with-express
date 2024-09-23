// ********RoostGPT********
/*
Test generated by RoostGPT for test advancedReportTest using AI Type  and AI Model 

ROOST_METHOD_HASH=mc_68ed7c4db2
ROOST_METHOD_SIG_HASH=mc_fc4e390d17


*/

// ********RoostGPT********
const { mc } = require('../src/public/javascripts/library/angular.min.js');

describe('mc function', () => {
  let mockMa;
  let mockB;
  let mockU;
  let mockE;

  beforeEach(() => {
    mockMa = jest.fn();
    mockB = jest.fn();
    mockU = jest.fn();
    mockE = jest.fn();

    global.ma = mockMa;
    global.B = mockB;
    global.U = mockU;
    global.E = mockE;
  });

  test('should set data when c is defined', () => {
    const b = {};
    const a = 'testKey';
    const c = 'testValue';
    mockB.mockReturnValue(true);
    mockMa.mockReturnValue({});

    const result = mc(b, a, c);

    expect(mockMa).toHaveBeenCalledWith(b, 'data');
    expect(mockB).toHaveBeenCalledWith(c);
    expect(result).toBeUndefined();
    expect(b.data[a]).toBe(c);
  });

  test('should return existing data when a is defined and c is undefined', () => {
    const b = { data: { testKey: 'existingValue' } };
    const a = 'testKey';
    mockB.mockReturnValueOnce(false).mockReturnValueOnce(true);
    mockU.mockReturnValue(false);
    mockMa.mockReturnValue(b.data);

    const result = mc(b, a);

    expect(mockMa).toHaveBeenCalledWith(b, 'data');
    expect(mockB).toHaveBeenCalledWith(a);
    expect(mockU).toHaveBeenCalledWith(a);
    expect(result).toBe('existingValue');
  });

  test('should extend data when a is an object and c is undefined', () => {
    const b = { data: { existingKey: 'existingValue' } };
    const a = { newKey: 'newValue' };
    mockB.mockReturnValueOnce(false).mockReturnValueOnce(true);
    mockU.mockReturnValue(true);
    mockMa.mockReturnValue(b.data);

    const result = mc(b, a);

    expect(mockMa).toHaveBeenCalledWith(b, 'data');
    expect(mockB).toHaveBeenCalledWith(a);
    expect(mockU).toHaveBeenCalledWith(a);
    expect(mockE).toHaveBeenCalledWith(b.data, a);
    expect(result).toBeUndefined();
    expect(b.data).toEqual({ existingKey: 'existingValue', newKey: 'newValue' });
  });

  test('should return all data when a and c are undefined', () => {
    const b = { data: { key1: 'value1', key2: 'value2' } };
    mockB.mockReturnValue(false);
    mockMa.mockReturnValue(b.data);

    const result = mc(b);

    expect(mockMa).toHaveBeenCalledWith(b, 'data');
    expect(result).toEqual(b.data);
  });

  test('should create data object if it does not exist', () => {
    const b = {};
    const a = 'testKey';
    const c = 'testValue';
    mockB.mockReturnValue(true);
    mockMa.mockReturnValue(undefined);

    mc(b, a, c);

    expect(mockMa).toHaveBeenCalledWith(b, 'data');
    expect(b.data).toEqual({ testKey: 'testValue' });
  });
});