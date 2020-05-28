const ntsadata = require('../controllers/ntsadata.controller');

test('should be an object', () => {
  expect.assertions(1);
  return ntsadata.getNTSAdataReport().then((data) => {
    expect(data).toBe('object');
  });
});
