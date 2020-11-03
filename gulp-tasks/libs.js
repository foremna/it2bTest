"use strict";

import { paths } from "../gulpfile.babel";
import gulp from "gulp";
import yargs from "yargs";

const webpackConfig = require("../webpack.config.js"),
    argv = yargs.argv,
    production = !!argv.production;

webpackConfig.mode = production ? "production" : "development";
webpackConfig.devtool = production ? false : "source-map";

gulp.task("libs", () => {
    return gulp.src(paths.libs.src)
        .pipe(gulp.dest(paths.libs.dist))
});