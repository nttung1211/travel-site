let gulp = require(`gulp`),
    imagemin = require(`gulp-imagemin`),
    del = require(`del`),
    usemin = require(`gulp-usemin`),
    rev = require(`gulp-rev`),
    cssnano = require(`gulp-cssnano`),
    uglify = require(`gulp-uglify`);
    browserSync = require(`browser-sync`).create();

gulp.task(`docs`, () => {
    browserSync.init({
        notify: false,
        server: {
            baseDir: `docs`
        }
    });
})

gulp.task(`deleteDocsFolder`, () => del(`./docs`));

gulp.task(`usemin`, [`deleteDocsFolder`], () =>
    gulp.src(`./app/index.html`)
    .pipe(usemin({
        html: [],
        css: [() => rev(), () => cssnano()],
        js: [() => rev(), () => uglify()],
        jsAttributes: {
            defer: [false, true]
        }
    }))
    .pipe(gulp.dest(`./docs`))
)

gulp.task(`optimizeImages`, [`deleteDocsFolder`], () => 
    gulp.src([`./app/assets/images/**/*`, `!./app/assets/images/icons`, `!./app/assets/images/icons/**/*`])
    .pipe(imagemin({
        progressive: true,
        interlaced: true,
        multipass: true
    }))
    .pipe(gulp.dest(`./docs/assets/images`))
);

gulp.task(`build`, [`optimizeImages`, `usemin`]);

