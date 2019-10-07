let gulp = require(`gulp`),
    watch = require(`gulp-watch`),
    browserSync = require(`browser-sync`).create();

gulp.task(`watch`, () => {
    browserSync.init({
        notify: false,
        server: {
            baseDir: `app`
        }
    })
    watch('./app/index.html', () => {
        browserSync.reload();
    })
    watch(`./app/assets/css/**/*.css`, () => {
        gulp.start(`cssInject`);
    });
});
// /** match a entire tree whereas /* just match a directory 

gulp.task(`cssInject`, [`style`], () => {
    return gulp.src(`./app/temp/css/style.css`)
        .pipe(browserSync.stream());
});