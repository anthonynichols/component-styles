let selectorCount = 0

describe('Utility mixin', () => {
  describe('when given a single argument', () => {
    it('should create a single utility', () => {
      let selector = getSelector('test/fixtures/stylus/utility.css', selectorCount++)

      selector.value.should.equal('#component-styles .\\+hidden')
      selector.score.should.equal('0,1,1,0')
    })
  })
})
