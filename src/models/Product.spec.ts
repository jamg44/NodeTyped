import * as Product from './Product';

describe('Product Model', () => {

  let _find;
  let model = Product;

  beforeAll(() => {
    _find = model.find;
  });

  afterAll(() => {
    model.find = _find;
  });

  it('should have indexes', () => {
    expect(model.schema.indexes().length).not.toBe(0);
  });

  describe('list', () => {
    it('should return items list', (done) => {
      let mockList = [ {_id: 'aaa'}, {_id: 'bbb'}];
      let mockQuery = {
        skip: jasmine.createSpy('skip'),
        limit: jasmine.createSpy('limit'),
        sort: jasmine.createSpy('sort'),
        select: jasmine.createSpy('select'),
        exec: () => Promise.resolve(mockList)
      };
      model.find = jasmine.createSpy('model.find').and.callFake(filter => mockQuery);

      // list (filter, skip, limit, sort, select): promise
      model.list({_id: 2}, 3, 10, 'fakeSort', 'fakeField1 fakeField2').then(list => {
        expect(model.find).toHaveBeenCalledWith({_id: 2});
        expect(mockQuery.skip).toHaveBeenCalledWith(3);
        expect(mockQuery.limit).toHaveBeenCalledWith(10);
        expect(mockQuery.sort).toHaveBeenCalledWith('fakeSort');
        expect(mockQuery.select).toHaveBeenCalledWith('fakeField1 fakeField2');
        expect(list).toEqual(mockList);
        done();
      });
    });

    it('should reject on fail', (done) => {
      model.find = jasmine.createSpy('model.find').and.throwError('fakeError');
      model.list({_id: 2}, 3, 10, 'fakeSort', 'fakeField1 fakeField2').catch( err => {
        expect(err).toEqual(new Error('fakeError'));
        done();
      });
    });
  });

});
