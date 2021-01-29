const yargs = require('yargs');
const fs = require('fs').promises;
const path = require('path');

yargs.option('function', { alias: "func" }).command(['create <filename>'], "Create a new React template", {}, (argv) => {
  const template = `
import React from 'react';

export const ${argv.filename} = (props) => {
  return (
    <div>${argv.filename} works</div>
  );
}
  `;

  fs.writeFile(path.resolve(__dirname, `${argv.filename}.js`), template)
    .then(res => console.log(res));
  console.log(template);
}).argv;


console.log(yargs.argv);
