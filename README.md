# log-me-gently

[![Build Status][ci-image]][ci-url]
[![Coverage Status][coverage-image]][coverage-url]
[![NPM version][npm-image]][npm-url]
[![Dependencies Status][dependencies-image]][dependencies-url]
[![DevDependencies Status][devdependencies-image]][devdependencies-url]

Logging util that looks for logger in the context (added by middleware like [alpha-lambda-bunyan][alpha-lambda-bunyan-url]) and logs at the specified level. `log-me-gently` will skip logging if logger is not found.

## API
You need to initialize `log-me-gently` by passing log level, like:

```js
const logger = logMeGently({ level: 'debug' });
```

### log(context, ...args)
Log method takes `context` and any number of arguments that will be passed to the logger.

## Example
```js
const logMeGently = require('@alpha-lambda/log-me-gently');

const logger = logMeGently({ level: 'debug' });

module.exports = (context, event) => {
  logger.log(context, event, 'processing event');

  // Do something
};
```

## License

The MIT License (MIT)

Copyright (c) 2019 Anton Bazhal

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

[alpha-lambda-bunyan-url]: https://www.npmjs.com/package/alpha-lambda-bunyan
[ci-image]: https://circleci.com/gh/alpha-lambda/log-me-gently.svg?style=shield&circle-token=cb05dea04e2525a8ee6a9ef2e1645f10af8234dd
[ci-url]: https://circleci.com/gh/alpha-lambda/log-me-gently
[coverage-image]: https://coveralls.io/repos/github/alpha-lambda/log-me-gently/badge.svg?branch=master
[coverage-url]: https://coveralls.io/github/alpha-lambda/log-me-gently?branch=master
[dependencies-url]: https://david-dm.org/alpha-lambda/log-me-gently
[dependencies-image]: https://david-dm.org/alpha-lambda/log-me-gently/status.svg
[devdependencies-url]: https://david-dm.org/alpha-lambda/log-me-gently?type=dev
[devdependencies-image]: https://david-dm.org/alpha-lambda/log-me-gently/dev-status.svg
[npm-url]: https://www.npmjs.org/package/@alpha-lambda/log-me-gently
[npm-image]: https://img.shields.io/npm/v/@alpha-lambda/log-me-gently.svg
