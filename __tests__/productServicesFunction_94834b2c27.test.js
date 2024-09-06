// ********RoostGPT********
/*
Test generated by RoostGPT for test java-customannotation-test using AI Type  and AI Model 

ROOST_METHOD_HASH=productServicesFunction_f2b932a3bd
ROOST_METHOD_SIG_HASH=productServicesFunction_94834b2c27


*/

// ********RoostGPT********
const angular = require('angular');
require('angular-mocks');

angular.module('irfan.basic.service', ['ngMockE2E']);

// Mocking the $resource service
const mockResource = jest.fn().mockImplementation(() => {
  return {
    getAllProducts: { method: 'GET' },
    deleteProduct: { method: 'DELETE', params: { id: '@id' } },
    updateProduct: { method: 'PUT', params: { id: '@id' }, data: { title: 'title', description: 'description', price: 'price' } },
    insertProduct: { method: 'POST', data: { title: 'title', description: 'description', price: 'price' } }
  };
});

jest.mock('angular-resource', () => ({
  $resource: mockResource
}), { virtual: true });

const appService = require('../../src/public/javascripts/ng-script/app-service');

describe('productServicesFunction', () => {
  beforeEach(() => {
    angular.mock.module('irfan.basic.service');
  });

  test('should define all product service methods', () => {
    const services = appService.productServicesFunction(mockResource);

    expect(services.getAllProducts).toBeDefined();
    expect(services.deleteProduct).toBeDefined();
    expect(services.updateProduct).toBeDefined();
    expect(services.insertProduct).toBeDefined();
  });

  test('should setup HTTP methods correctly', () => {
    const services = appService.productServicesFunction(mockResource);

    expect(services.getAllProducts.method).toBe('GET');
    expect(services.deleteProduct.method).toBe('DELETE');
    expect(services.updateProduct.method).toBe('PUT');
    expect(services.insertProduct.method).toBe('POST');
  });

  test('should configure params and data for methods correctly', () => {
    const services = appService.productServicesFunction(mockResource);

    expect(services.deleteProduct.params).toEqual({ id: '@id' });
    expect(services.updateProduct.params).toEqual({ id: '@id' });
    expect(services.updateProduct.data).toEqual({ title: 'title', description: 'description', price: 'price' });
    expect(services.insertProduct.data).toEqual({ title: 'title', description: 'description', price: 'price' });
  });
});