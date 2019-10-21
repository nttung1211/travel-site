let gulp = require(`gulp`),
    rename = require(`gulp-rename`),
    svgSprite = require(`gulp-svg-sprite`),
    del = require(`del`),
    config = {
        shape:{
            spacing: {
                padding: 1
            }
        },
        mode: {
            css: {
                sprite: `sprite.svg`,
                render: {
                    css:{
                        template:`./gulp/templates/sprite.css`
                    }
                }
            }
        }
    };

gulp.task(`beginClean`, () => 
    del([`./app/temp/sprite`, `./app/assets/images/sprite`])
);

gulp.task(`createSprite`, [`beginClean`], () => 
    gulp.src(`./app/assets/images/icons/**/*.svg`)
    .pipe(svgSprite(config))
    .pipe(gulp.dest(`./app/temp/sprite/`))
);

gulp.task(`copySpriteGraphic`, [`createSprite`], () => 
    gulp.src(`./app/temp/sprite/css/**/*.svg`)
    .pipe(gulp.dest(`./app/assets/images/sprite`))
);

gulp.task(`copySprite`, [`createSprite`], () => 
    gulp.src(`./app/temp/sprite/css/*.css`)
    .pipe(rename(`_sprite.css`))
    .pipe(gulp.dest(`./app/assets/css/modules`))
);

gulp.task(`icon`, [`beginClean`, `createSprite`, `copySpriteGraphic`, `copySprite`]);