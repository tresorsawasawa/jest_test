const { it } = require('eslint/lib/rule-tester/rule-tester');
const { string } = require('stylelint/lib/formatters');
const stringLength = require ('./stringLength.js');

it('String length', () => {
  expect(stringLength('hello')).toBe(5);
});

it('String length out the range', () => {
  expect(() => stringLength('hello microverse'))
    .toThrow('String length is expected to be in the range of 1 - 10');
  expect(() =>  stringLength(''))
    .toThrow('String length is expected to be in the range of 1 - 10');
});



