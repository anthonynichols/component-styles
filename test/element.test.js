let selectorCount = 0

describe("Element mixin", () => {
  describe('when given a single argument', () => {
    it('should create a single element', () => {
      let selector = getSelector('test/fixtures/stylus/element.css', selectorCount++)

      selector.value.should.equal('.Panel-header')
      selector.score.should.equal('0,0,1,0')
    })
  })

  describe('when given multiple arguments', () => {
    it('should create a list of elements', () => {
      let selector = getSelector('test/fixtures/stylus/element.css', selectorCount++)

      selector.value.should.equal('.Panel-header,.Panel-footer')
      selector.score.should.equal('0,0,1,0')
    })
  })

  describe('when nested inside of an element', () => {
    it('should create a nested element', () => {
      let selector = getSelector('test/fixtures/stylus/element.css', selectorCount++)

      selector.value.should.equal('.Panel-footer-text')
      selector.score.should.equal('0,0,1,0')
    })

    describe('and when given multiple arguments', () => {
      it('should create a list of nested elements', () => {
        let selector = getSelector('test/fixtures/stylus/element.css', selectorCount++)

        selector.value.should.equal('.Panel-header-text,.Panel-footer-text')
        selector.score.should.equal('0,0,1,0')
      })
    })
  })

  describe('when nested inside of a modifier', () => {
    it('should create a nested element inside of a modified selector', () => {
      let selector = getSelector('test/fixtures/stylus/element.css', selectorCount++)

      selector.value.should.equal('.Panel.\\*awesome .Panel-icon')
      selector.score.should.equal('0,0,3,0')
    })
  })

  describe('when nested inside of a pseudo', () => {
    it('should create a nested element inside of a pseudo selector', () => {
      let selector = getSelector('test/fixtures/stylus/element.css', selectorCount++)

      selector.value.should.equal('.Panel:hover .Panel-icon')
      selector.score.should.equal('0,0,3,0')
    })
  })
})

describe('Sibling element mixin', () => {
  describe('when given a single argument', () => {
    it('should create a single sibling element', () => {
      let selector = getSelector('test/fixtures/stylus/element.css', selectorCount++)

      selector.value.should.equal('.Panel-header + .Panel-footer')
      selector.score.should.equal('0,0,2,0')
    })
  })

  describe('when given multiple arguments', () => {
    it('should create a list of sibling elements', () => {
      let selector = getSelector('test/fixtures/stylus/element.css', selectorCount++)

      selector.value.should.equal('.Panel-header + .Panel-body,.Panel-header + .Panel-footer')
      selector.score.should.equal('0,0,2,0')
    })
  })

  describe('when nested inside of a modifier', () => {
    it('should create a nested sibling element inside of a modified selector', () => {
      let selector = getSelector('test/fixtures/stylus/element.css', selectorCount++)

      selector.value.should.equal('.Panel-header.\\*awesome + .Panel-footer')
      selector.score.should.equal('0,0,3,0')
    })
  })

  describe('when nested inside of a pseudo', () => {
    it('should create a nested sibling element inside of a pseudo selector', () => {
      let selector = getSelector('test/fixtures/stylus/element.css', selectorCount++)

      selector.value.should.equal('.Panel-header:hover + .Panel-footer')
      selector.score.should.equal('0,0,3,0')
    })
  })
})

describe('General sibling element mixin', () => {
  describe('when given a single argument', () => {
    it('should create a single general sibling element', () => {
      let selector = getSelector('test/fixtures/stylus/element.css', selectorCount++)

      selector.value.should.equal('.Panel-header ~ .Panel-footer')
      selector.score.should.equal('0,0,2,0')
    })
  })

  describe('when given multiple arguments', () => {
    it('should create a list of general sibling elements', () => {
      let selector = getSelector('test/fixtures/stylus/element.css', selectorCount++)

      selector.value.should.equal('.Panel-header ~ .Panel-body,.Panel-header ~ .Panel-footer')
      selector.score.should.equal('0,0,2,0')
    })
  })

  describe('when nested inside of a modifier', () => {
    it('should create a nested general sibling element inside of a modified selector', () => {
      let selector = getSelector('test/fixtures/stylus/element.css', selectorCount++)

      selector.value.should.equal('.Panel-header.\\*awesome ~ .Panel-footer')
      selector.score.should.equal('0,0,3,0')
    })
  })

  describe('when nested inside of a pseudo', () => {
    it('should create a nested general sibling element inside of a pseudo selector', () => {
      let selector = getSelector('test/fixtures/stylus/element.css', selectorCount++)

      selector.value.should.equal('.Panel-header:hover ~ .Panel-footer')
      selector.score.should.equal('0,0,3,0')
    })
  })
})

describe('Child element mixin', () => {
  describe('when given a single argument', () => {
    it('should create a single child element', () => {
      let selector = getSelector('test/fixtures/stylus/element.css', selectorCount++)

      selector.value.should.equal('.Panel > .Panel-content')
      selector.score.should.equal('0,0,2,0')
    })
  })

  describe('when given multiple arguments', () => {
    it('should create a list of child elements', () => {
      let selector = getSelector('test/fixtures/stylus/element.css', selectorCount++)

      selector.value.should.equal('.Panel > .Panel-header,.Panel > .Panel-footer')
      selector.score.should.equal('0,0,2,0')
    })
  })

  describe('when nested inside of a modifier', () => {
    it('should create a nested child element inside of a modified selector', () => {
      let selector = getSelector('test/fixtures/stylus/element.css', selectorCount++)

      selector.value.should.equal('.Panel.\\*awesome > .Panel-text')
      selector.score.should.equal('0,0,3,0')
    })
  })

  describe('when nested inside of a pseudo', () => {
    it('should create a nested child element inside of a pseudo selector', () => {
      let selector = getSelector('test/fixtures/stylus/element.css', selectorCount++)

      selector.value.should.equal('.Panel:hover > .Panel-text')
      selector.score.should.equal('0,0,3,0')
    })
  })
})
