const { string } = require("stylelint/lib/formatters");

const stringLength = (string) => {
  if (string.length < 1 || string.length > 10)
    throw new Error ('String length is expected to be in the range of 1 - 10');
  return string.length;
}


module.exports = stringLength
