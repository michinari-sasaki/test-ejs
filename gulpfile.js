const gulp = require('gulp');
const ejs = require('gulp-ejs');
const rename = require('gulp-rename');

//EJS(テンプレートエンジン)
gulp.task('watch', function () {
  gulp.watch(['src/ejs/**/*.ejs', '!' + 'src/ejs/**/_*.ejs'], gulp.task('ejs'));
});

gulp.task('ejs', function (done) {
  gulp
    .src(
      ['src/ejs/**/*.ejs', '!' + 'src/ejs/**/_*.ejs'] //参照するディレクトリと出力を除外するファイル
    )
    .pipe(ejs())
    .pipe(rename({ extname: '.html' })) //拡張子をhtmlに
    .pipe(gulp.dest('dest/')); //出力先

  done();
});
