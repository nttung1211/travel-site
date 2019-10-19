let gulp = require(`gulp`),
    postcss = require(`gulp-postcss`),
    cssvars = require(`postcss-simple-vars`),
    nested = require(`postcss-nested`),
    cssImport = require(`postcss-import`),
    mixins = require(`postcss-mixins`),
    autoprefixer = require(`autoprefixer`),
    hexrgba = require(`postcss-hexrgba`);

gulp.task(`style`, () => {
    return gulp.src(`./app/assets/css/style.css`)
        .pipe(postcss([cssImport, mixins, cssvars, nested, hexrgba, autoprefixer]))
        .on(`error`, function (errorInfo) {
            console.log(errorInfo.toString());
            this.emit(`end`);
        })
        .pipe(gulp.dest(`./app/temp/css/`));
});