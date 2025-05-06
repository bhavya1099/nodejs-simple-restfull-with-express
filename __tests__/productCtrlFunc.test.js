const productCtrlFunc = require('./app-controller'); // Import the module 
const productServices = require('./productServices'); // Import the module 

jest.mock('./productServices'); //Mock the productServices

describe("productCtrlFunc", () => {
  let mockScope;

  beforeEach(() => {
    mockScope = {
      selectedProduct: {},
      products: [],
      errormessage: "",
      isNewData: false,
      viewPage: ""
    };
    productServices.getAllProducts.mockReset();
    productServices.deleteProduct.mockReset();
    productServices.insertProduct.mockReset();
    productServices.updateProduct.mockReset();
  });

  it('should get all products', () => {
    const response = {
      result: true,
      products: [{_id: '1', title: 'prod1', description: 'desc1', price: 100}]
    };
    productServices.getAllProducts.mockResolvedValue({$promise: Promise.resolve(response)});

    productCtrlFunc(mockScope, productServices);

    process.nextTick(() => {
      expect(mockScope.products).toStrictEqual(response.products);
    });
  });

  it('should handle error in getAllProducts', ()=> {
    const response = { 
      result: false,
      errorDesc: {
        err: 'Error occurred'
      }
    };
    productServices.getAllProducts.mockResolvedValue({$promise: Promise.resolve(response)});

    productCtrlFunc(mockScope, productServices);

    process.nextTick(() => {
      expect(mockScope.errormessage).toBe(response.errorDesc.err);
    });
  });
  
 /* Similarly write test cases for other functions SubmitDelete, angularSubmitSaveForm,
    angularSubmitUpdateForm with both success and error scenarios, 
    as demonstrated above for the getAllProducts function */
});
