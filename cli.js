#!/usr/bin/env node

var meow = require('meow');
var concat = require('concat');

var cli = meow('Usage: concat-files foo.js bar.js baz.js -o bundle.js', {
  alias: {
    h: 'help',
    o: 'output'
  }
});

if (cli.input && cli.flags.output) {
  concat(cli.input, cli.flags.output, function (err) {
    if (err) throw err;
    console.log('\nFiles have been bundled.\n');
  });
} else {
  console.log('\nError: Need an input and output file. concat-files -h for usage.\n');
}
