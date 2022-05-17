// @flow
const prettier = require('prettier');

function formatJS(str: string): string {
  return prettier.format(str, {parser: 'flow'});
}

module.exports = formatJS;
