var gulp = require("gulp");
var download = require("gulp-download");
var connect = require("gulp-connect");

var sources = [
    "js/**/*.js",
    "*.html",
    "*.css"
];

gulp.task("download", function() {
    download("https://github.com/melonjs/melonJS/releases/download/5.1.0/melonjs.js").pipe(gulp.dest("libs/"));
});

gulp.task("watch", function() {
    return gulp.watch(sources, ["reconnect"]);
});

gulp.task("connect", function() {
    return connect.server({
        root: ".",
        livereload: true
    });
});
gulp.task("reconnect", function() {
    return gulp
        .src(sources)
        .pipe(connect.reload());
});

gulp.task("serve", ["connect", "watch"]);
