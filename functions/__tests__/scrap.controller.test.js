const scrap = require('../controllers/scrap.controller')

test('should be truthy', () => {
    expect.assertions(1)
    return scrap.getUrlsAndPush().then(data => {
        expect(data.typeOf).toBe('óbject')
    })
})

