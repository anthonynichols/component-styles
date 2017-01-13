let selectorCount = 0

describe('Component mixin', () => {
  describe('when given a single argument', () => {
    it('should create a single component', () => {
      let selector = getSelector('test/fixtures/stylus/component.css', selectorCount++)

      selector.value.should.equal('.Button')
      selector.score.should.equal('0,0,1,0')
    })
  })

  describe('when given multiple arguments', () => {
    it('should create a list of components', () => {
      let selector = getSelector('test/fixtures/stylus/component.css', selectorCount++)

      selector.value.should.equal('.Panel,.Card')
      selector.score.should.equal('0,0,1,0')
    })
  })

  describe('when nested inside of a component', () => {
    it('should create a nested component', () => {
      let selector = getSelector('test/fixtures/stylus/component.css', selectorCount++)

      selector.value.should.equal('.Card .Icon')
      selector.score.should.equal('0,0,2,0')
    })
  })
})

describe('Sibling component mixin', () => {
  describe('when given a single argument', () => {
    it('should create a single sibling component', () => {
      let selector = getSelector('test/fixtures/stylus/component.css', selectorCount++)

      selector.value.should.equal('.Card + .Panel')
      selector.score.should.equal('0,0,2,0')
    })
  })

  describe('when given multiple arguments', () => {
    it('should create a list of sibling components', () => {
      let selector = getSelector('test/fixtures/stylus/component.css', selectorCount++)

      selector.value.should.equal('.Card + .Panel,.Card + .Avatar')
      selector.score.should.equal('0,0,2,0')
    })
  })
})

describe('General sibling component mixin', () => {
  describe('when given a single argument', () => {
    it('should create a single general sibling component', () => {
      let selector = getSelector('test/fixtures/stylus/component.css', selectorCount++)

      selector.value.should.equal('.Card ~ .Panel')
      selector.score.should.equal('0,0,2,0')
    })
  })

  describe('when given multiple arguments', () => {
    it('should create a list of general sibling components', () => {
      let selector = getSelector('test/fixtures/stylus/component.css', selectorCount++)

      selector.value.should.equal('.Card ~ .Panel,.Card ~ .Avatar')
      selector.score.should.equal('0,0,2,0')
    })
  })
})

describe('Child component mixin', () => {
  describe('when given a single argument', () => {
    it('should create a single child component', () => {
      let selector = getSelector('test/fixtures/stylus/component.css', selectorCount++)

      selector.value.should.equal('.Card > .Panel')
      selector.score.should.equal('0,0,2,0')
    })
  })

  describe('when given multiple arguments', () => {
    it('should create a list of child components', () => {
      let selector = getSelector('test/fixtures/stylus/component.css', selectorCount++)

      selector.value.should.equal('.Card > .Panel,.Card > .Avatar')
      selector.score.should.equal('0,0,2,0')
    })
  })
})
