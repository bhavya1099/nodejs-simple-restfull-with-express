// ********RoostGPT********
/*
Test generated by RoostGPT for test advancedReportTest using AI Type  and AI Model 

ROOST_METHOD_HASH=handleOnErrorAjaxSubmit_cc94987618
ROOST_METHOD_SIG_HASH=handleOnErrorAjaxSubmit_66571435f0


*/

// ********RoostGPT********
const { handleOnErrorAjaxSubmit, showFormErrorMessage } = require('../../../src/public/javascripts/custom');

jest.mock('../../../src/public/javascripts/custom', () => ({
  ...jest.requireActual('../../../src/public/javascripts/custom'),
  showFormErrorMessage: jest.fn(),
}));

describe('handleOnErrorAjaxSubmit', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should call showFormErrorMessage with message when errorDesc.message exists', () => {
    const response = {
      errorDesc: {
        message: 'Error message',
      },
    };
    handleOnErrorAjaxSubmit(response);
    expect(showFormErrorMessage).toHaveBeenCalledWith('Error message');
  });

  test('should call showFormErrorMessage with err when errorDesc.err exists', () => {
    const response = {
      errorDesc: {
        err: 'Error description',
      },
    };
    handleOnErrorAjaxSubmit(response);
    expect(showFormErrorMessage).toHaveBeenCalledWith('Error description');
  });

  test('should call showFormErrorMessage with default message when neither message nor err exists', () => {
    const response = {
      errorDesc: {},
    };
    handleOnErrorAjaxSubmit(response);
    expect(showFormErrorMessage).toHaveBeenCalledWith('Something was wrong, please refresh browser and try again!');
  });

  test('should handle response without errorDesc property', () => {
    const response = {};
    handleOnErrorAjaxSubmit(response);
    expect(showFormErrorMessage).toHaveBeenCalledWith('Something was wrong, please refresh browser and try again!');
  });

  test('should handle null response', () => {
    handleOnErrorAjaxSubmit(null);
    expect(showFormErrorMessage).toHaveBeenCalledWith('Something was wrong, please refresh browser and try again!');
  });

  test('should handle undefined response', () => {
    handleOnErrorAjaxSubmit(undefined);
    expect(showFormErrorMessage).toHaveBeenCalledWith('Something was wrong, please refresh browser and try again!');
  });
});
