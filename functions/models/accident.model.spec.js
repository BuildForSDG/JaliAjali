const accidentModel = require('./accident.model')

describe("Accident Case:",()=>{
  const model = new accidentModel({});
  const error = model.validateSync();

it.each(['no_of_victims','deviceType','reportedTime','location.submitted_location'])('must have %s',(item)=>{
  expect(error.errors[`${item}`].message).toEqual('Path `' +item +'` is required.');
})
it('generates a unique id',()=>{
  expect(model).toMatchObject({
    case_id: expect.anything(),
    _id:expect.anything()
  })
})
})