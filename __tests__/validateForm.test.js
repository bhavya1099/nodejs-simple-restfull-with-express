// Test file for custom.js module

// Import the required module
const custom = require("../../../src/public/javascripts/custom.js");
const $ = require("jquery");

// Mocking jQuery functions
$.fn.val = jest.fn();
global.$ = $;

//Test Suite for validationForm function
describe('validateForm', () => {
  
  test('Returns true when title input is not empty', () => {
    // Mocking jQuery input value
    $.fn.val.mockReturnValue("Sample Title");

    // Test the function
    let result = custom.validateForm();
    expect(result).toBe(true);
  });

  test('Returns false when title input is empty', () => {
    // Mocking jQuery input value
    $.fn.val.mockReturnValue("");

    // Test the function
    let result = custom.validateForm();
    expect(result).toBe(false);
  });
});
