let gulp = require(`gulp`),
    webpack = require(`webpack`);

gulp.task(`scripts`, (callback) => {
    webpack(require(`../../webpack.config`), (err, stats) => {
        if (err) {
            console.log(err.toString()); // This is not doing anything as I see
        }

        console.log(stats.toString());
        callback();
    });
});