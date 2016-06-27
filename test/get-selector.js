const fs = require('fs')
const path = require('path')
const specificity = require('specificity')

function getSelector(file, index = 0) {
  let contents = fs.readFileSync(path.resolve(file)).toString()
  let value = contents.match(/[^\}]*\{/g)[index].split('{')[0].trim()
  let score = specificity.calculate(value)[0].specificity

  return {
    value,
    score,
  }
}

module.exports = getSelector
