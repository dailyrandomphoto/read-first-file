'use strict';

const { readdir, readFile } = require('fs');
const { resolve } = require('path');

module.exports = function (
  dirname,
  {
    onFileContent = () => {},
    onError = (err) => {
      throw err;
    },
    compareFn,
    filterFn = () => true,
    readContents = true
  }
) {
  readdir(dirname, (err, filenames) => {
    if (err) {
      onError(err);
      return;
    }

    const filename = filenames.filter((x) => filterFn(x)).sort(compareFn)[0];
    if (readContents && filename) {
      readFile(resolve(dirname, filename), 'utf-8', (err, content) => {
        if (err) {
          onError(err);
          return;
        }

        onFileContent(filename, content);
      });
    } else {
      onFileContent(filename);
    }
  });
};
