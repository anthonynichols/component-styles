require('shelljs/global');
var specificity = require('specificity');
var fs = require('fs-extra');
var glob = require("glob");

// delete previous css
exec('rm -rf tests/sass/fixtures/*.css');

// compile sass fixtures
exec('sass --update tests/sass/fixtures --style expanded --sourcemap=none');

var customMatchers = {
  toBeMoreSpecificThan: function(util, customEqualityTesters) {
    return {
      compare: function(actual, expected) {
        console.log("actual", actual);
        console.log("expected", expected);

        var result = {};
        result.pass = true;
        result.message = "woot";
        return result;
      }
    };
  }
};

describe("component-styles", function() {
  beforeEach(function() {
    jasmine.addMatchers(customMatchers);
  });
});
