var gulp = require('gulp')
var concat = require('gulp-concat')

var files = [
  'src/stylus/symbols.styl',
  'src/stylus/mixins/component.styl',
  'src/stylus/mixins/element.styl',
  'src/stylus/mixins/modifier.styl',
  'src/stylus/mixins/pseudo.styl',
  'src/stylus/mixins/utility.styl',
]

gulp.task('build', function() {
  return gulp.src(files)
    .pipe(concat('index.styl'))
    .pipe(gulp.dest('./'))
})
