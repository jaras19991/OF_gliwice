/**
 * Cleaner
 */
const gulp = require("gulp");
const del = require("del");

const config = require("./config");

gulp.task("clean", () => {
  const folderDelete = ["./assets"];
  if (config.root.dist === "./") {
    folderDelete.push("./assets", "*.html");
  }
  del.sync(folderDelete, { force: true });
});
