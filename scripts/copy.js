"use strict";

const path = require("path");
const fs = require("fs-extra");
const config = require('../angular');
const readmeFileName = 'README.md';
const project = path.join(__dirname, "../", config.projects["ng-hotkeys"].root);
const root = path.join(__dirname, "../");
const originalReadme = path.join(root, readmeFileName);
const destReadme = path.join(project, readmeFileName);
// destination.txt will be created or overwritten by default.
fs.copyFile(originalReadme, destReadme, (err) => {
    if (err) throw err;
    console.log(`${originalReadme} was copied to ${destReadme}`);
});
