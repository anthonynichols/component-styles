let selectorCount = 0

describe('Modifier mixin', () => {
  describe('when given a single argument', () => {
    it('should append the modifier to a selector', () => {
      let selector = getSelector('test/fixtures/stylus/modifier.css', selectorCount++)

      selector.value.should.equal('.Button.\\*primary')
      selector.score.should.equal('0,0,2,0')
    })
  })

  describe('when given multiple arguments', () => {
    it('should append the modifiers to a selector', () => {
      let selector = getSelector('test/fixtures/stylus/modifier.css', selectorCount++)

      selector.value.should.equal('.Button.\\*primary.\\*outline')
      selector.score.should.equal('0,0,3,0')
    })
  })

  describe('when nested inside of a modifier', () => {
    it('should append the modifiers to a selector', () => {
      let selector = getSelector('test/fixtures/stylus/modifier.css', selectorCount++)

      selector.value.should.equal('.Button.\\*secondary.\\*disabled')
      selector.score.should.equal('0,0,3,0')
    })
  })
})

describe('Parent modifier mixin', () => {
  describe('when given a single argument', () => {
    it('should append the modifier to the parent selector', () => {
      let selector = getSelector('test/fixtures/stylus/modifier.css', selectorCount++)

      selector.value.should.equal('.Panel-body-list-item.\\*primary .Panel-body-list-item-icon')
      selector.score.should.equal('0,0,3,0')
    })
  })

  describe('when given multiple arguments', () => {
    it('should append the modifiers to the parent selector', () => {
      let selector = getSelector('test/fixtures/stylus/modifier.css', selectorCount++)

      selector.value.should.equal('.Panel-body-list-item.\\*primary.\\*outline .Panel-body-list-item-icon')
      selector.score.should.equal('0,0,4,0')
    })
  })
})

describe('Component modifier mixin', () => {
  describe('when given a single argument', () => {
    it('should append the modifier to a sibling selector', () => {
      let selector = getSelector('test/fixtures/stylus/modifier.css', selectorCount++)

      selector.value.should.equal('.Panel.\\*primary .Panel-body-list-item-icon')
      selector.score.should.equal('0,0,3,0')
    })
  })

  describe('when given multiple arguments', () => {
    it('should append the modifiers to a selector', () => {
      let selector = getSelector('test/fixtures/stylus/modifier.css', selectorCount++)

      selector.value.should.equal('.Panel.\\*primary.\\*outline .Panel-body-list-item-icon')
      selector.score.should.equal('0,0,4,0')
    })
  })

  describe('when nested inside of a modifier', () => {
    it('should append the modifiers to a selector', () => {
      let selector = getSelector('test/fixtures/stylus/modifier.css', selectorCount++)

      selector.value.should.equal('.Panel.\\*primary .Panel-body-list-item-icon.\\*awesome')
      selector.score.should.equal('0,0,4,0')
    })
  })
})
