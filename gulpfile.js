const gulp = require('gulp');
const rename = require('gulp-rename');
const ejs = require('gulp-ejs');
const replace = require('gulp-replace');
const plumber = require('gulp-plumber');

//EJS(テンプレートエンジン)
gulp.task('ejs', function (done) {
  gulp
    .src(
      ['src/ejs/**/*.ejs', '!' + 'src/ejs/**/_*.ejs'] //参照するディレクトリと出力を除外するファイル
    )
    .pipe(plumber())
    .pipe(ejs())
    .pipe(rename({
      extname: '.html'
    })) //拡張子をhtmlに
    .pipe(gulp.dest('dest/')); //出力先
  done();
});

gulp.task('watch', function () {
  gulp.watch(['src/ejs/**/*.ejs'], gulp.task('ejs'));
});