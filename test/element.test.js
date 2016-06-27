describe("element", () => {
  it("should create an element classname by appending the element symbol and element name to the component", () => {
    // let selector = getSelector('test/fixtures/sass/element.css', 1)
    let selector = getSelector('test/fixtures/stylus/element.css', 1)

    selector.value.should.equal('.Panel-list')
    selector.score.should.equal('0,0,1,0')
  })

  describe("nested inside of an element", () => {
    it("should create an element classname from nested elements", () => {
      // let selector = getSelector('test/fixtures/sass/element.css', 2)
      let selector = getSelector('test/fixtures/stylus/element.css', 2)

      selector.value.should.equal('.Panel-list-item')
      selector.score.should.equal('0,0,1,0')
    })
  })

  describe("with modifier", () => {
    it("should create an element classname with an appended modifier classname", () => {
      // let selector = getSelector('test/fixtures/sass/element.css', 3)
      let selector = getSelector('test/fixtures/stylus/element.css', 3)

      selector.value.should.equal('.Panel-list-item.--new')
      selector.score.should.equal('0,0,2,0')
    })
  })
})
