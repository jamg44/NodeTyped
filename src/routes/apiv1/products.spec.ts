const rewire = require('rewire');
const products = rewire('./products');

describe('routes/apiv1/products', () => {

  let _ProductModel;

  beforeAll(() => {
    _ProductModel = products.__get__('Product'); // save actual reference
  });

  afterAll(() => {
    products.__set__('Product', _ProductModel); // restore original reference
  });

  describe('get', () => {
    it('should return json list', async (done) => {
      let mockRes = {json: jasmine.createSpy('res.json')};
      let mockRows = [{_id: 'fakeId'}];
      products.__set__('Product', {
        list: () => Promise.resolve(mockRows)
      });

      await products.get(null, mockRes); // using await, remember to use done() at the end
      expect(mockRes.json).toHaveBeenCalledWith({success: true, rows: mockRows});
      done(); // it's an async function
    });
  });

});
