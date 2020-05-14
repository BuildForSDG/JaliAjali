const accidentModel = require('./admin.model')

describe("Admin:",()=>{
  const model = new accidentModel({});
  const error = model.validateSync();

it.each(['first_name','last_name','email','password'])('must have %s',(item)=>{
  expect(error.errors[`${item}`].message).toEqual('Path `' +item +'` is required.');
})
it('generates a unique id',()=>{
  expect(model).toMatchObject({
    uid: expect.anything(),
    _id:expect.anything()
  })
})
})