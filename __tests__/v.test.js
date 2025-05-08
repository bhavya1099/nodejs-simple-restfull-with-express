const v = require('./angular.min').v;
const ha = require('./angular.min').ha;

describe('v method test group', () => {
  let a, c, aPushSpy, parentSpy, haSpy;
  
  beforeAll(() => {
    a = [];
    c = {};
  });

  beforeEach(() => {
    aPushSpy = jest.spyOn(a, 'push');
    parentSpy = jest.fn();
    haSpy = jest.spyOn(global, 'ha');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('v method should call a.push', () => {
    v(a, c);
    expect(aPushSpy).toHaveBeenCalled();
  });

  test('a.push should be called with correct argument', () => {
    v(a, c);
    const pushArgument = aPushSpy.mock.calls[0][0];
    expect(pushArgument).toHaveProperty('priority', 0);
    expect(pushArgument).toHaveProperty('compile');
    expect(pushArgument.compile).toBeInstanceOf(Function);
  });

  test('compiled function should call ha when parent.length !== 0', () => {
    parentSpy.mockReturnValueOnce({length: 1});
    v(a, c);
    const compiledFunction = aPushSpy.mock.calls[0][0].compile({parent: parentSpy});
    compiledFunction({$watch: () => {}}, [{}]);
    expect(haSpy).toHaveBeenCalledWith({length: 1}, 'ng-binding');
  });
  
  test('compiled function should not call ha when parent.length === 0', () => {
    parentSpy.mockReturnValueOnce({length: 0});
    v(a, c);
    const compiledFunction = aPushSpy.mock.calls[0][0].compile({parent: parentSpy});
    compiledFunction({$watch: () => {}}, [{}]);
    expect(haSpy).not.toHaveBeenCalled();
  });
  
  // more test cases to cover error cases and other behavior...
});
