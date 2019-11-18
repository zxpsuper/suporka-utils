var del = require("del"); //删除文件和文件夹
var gulp = require("gulp");
const glob = require("glob");
var ts = require("gulp-typescript");
// var tsProject = ts.createProject("tsconfig.json");
let entry = [];
glob.sync("./src/**/*.ts").forEach(path => {
  if (!/\/index\.ts$/.test(path)) entry.push(path);
});

// build 文件夹清理
gulp.task("clean", () => {
  return del(["libs/"]);
});
gulp.task("all", function() {
  return (
    gulp
      // .src("src/**/*.ts")
      .src("src/index.ts")
      .pipe(ts())
      .js.pipe(gulp.dest("dist/"))
  );
});
gulp.task(
  "default",
  gulp.series("clean", function() {
    return (
      gulp
        // .src("src/**/*.ts")
        .src(entry)
        .pipe(ts())
        .js.pipe(gulp.dest("libs/"))
    );
  })
);
