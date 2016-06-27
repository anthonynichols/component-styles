let shell = require('shelljs')

// shell.exec('rm -rf test/fixtures/sass/*.css')
// shell.exec('sass --update test/fixtures/sass --sourcemap=none --style=expanded')

shell.exec('rm -rf test/fixtures/stylus/*.css')
shell.exec('stylus test/fixtures/stylus')

global.getSelector = require('./get-selector')
