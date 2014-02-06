// Copyright 2014 Lawrence Kesteloot

var path = require("path");
var Window = require("./window");
var input = require("./input");

if (process.argv.length <= 2) {
    console.log("usage: pad filename");
} else {
    var window = new Window();
    var filename = process.argv[2];
    var pathname = path.resolve(filename);
    window.panes[0].loadFile(pathname);
    input.start();
}
