# read-first-file

[![NPM Version][npm-version-image]][npm-url]
[![LICENSE][license-image]][license-url]
[![Build Status][travis-image]][travis-url]
[![code style: prettier][code-style-prettier-image]][code-style-prettier-url]

Read the first file from a directory.

## Installation

```sh
npm install read-first-file
```

## Usages

```js
const readfirst = require("read-first-file");

readfirst("/foo/bar/", {
  onFileContent: function (filename, content) {
    console.log(content);
  },
});
```

## Related

- [a-read-files](https://github.com/dailyrandomphoto/a-read-files) - Read files from a directory.

## License

Copyright (c) 2020 [dailyrandomphoto][my-url]. Licensed under the [MIT license][license-url].

[my-url]: https://github.com/dailyrandomphoto
[npm-url]: https://www.npmjs.com/package/read-first-file
[travis-url]: https://travis-ci.org/dailyrandomphoto/read-first-file
[license-url]: LICENSE
[code-style-prettier-url]: https://github.com/prettier/prettier
[npm-downloads-image]: https://img.shields.io/npm/dm/read-first-file
[npm-version-image]: https://img.shields.io/npm/v/read-first-file
[license-image]: https://img.shields.io/npm/l/read-first-file
[travis-image]: https://img.shields.io/travis/dailyrandomphoto/read-first-file
[code-style-prettier-image]: https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square
