describe("component", () => {
  it("should create a component classname", () => {
    // let selector = getSelector('test/fixtures/sass/component.css', 0)
    let selector = getSelector('test/fixtures/stylus/component.css', 0)

    selector.value.should.equal('.Card')
    selector.score.should.equal('0,0,1,0')
  })

  it("should create a comma delimited list of component classnames", () => {
    // let selector = getSelector('test/fixtures/sass/component.css', 2)
    let selector = getSelector('test/fixtures/stylus/component.css', 2)

    selector.value.should.match(/\.Button,\n?\.Avatar/)
    selector.score.should.equal('0,0,1,0')
  })

  describe("nested inside of a component", () => {
    it("should create nested component classnames", () => {
      // let selector = getSelector('test/fixtures/sass/component.css', 1)
      let selector = getSelector('test/fixtures/stylus/component.css', 1)

      selector.value.should.equal('.Card .Icon')
      selector.score.should.equal('0,0,2,0')
    })
  })
})
