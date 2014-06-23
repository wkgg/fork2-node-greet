#!/usr/bin/env node
greet = require("../index.js");
var parseArgs = require('minimist');
console.log(greet(process.argv[2], process.argv[3]));

