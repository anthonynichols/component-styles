let getSelector = require('./get-selector')
let shell = require('shelljs')

shell.exec('rm -rf test/fixtures/stylus/*.css')
shell.exec('node_modules/.bin/stylus test/fixtures/stylus')

global.getSelector = require('./get-selector')
