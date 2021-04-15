const assert = require('assert')
const { getEntries, transformToDigits } = require('../src/decode-numbers')

// getEntries

// prettier-ignore
const zeros = ' _  _  _  _  _  _  _  _  _ \n' +
              '| || || || || || || || || |\n' +
              '|_||_||_||_||_||_||_||_||_|\n' +
              '\n'

const entries = getEntries(zeros)
// prettier-ignore

const expected = [
  [
    ' _  _  _  _  _  _  _  _  _ ',
    '| || || || || || || || || |',
    '|_||_||_||_||_||_||_||_||_|',
  ],
]

assert.deepEqual(entries, expected)

// prettier-ignore
const transformedEntry = [
  ' _ ' +
  '| |' +
  '|_|',
  ' _ ' +
  '| |' +
  '|_|',
  ' _ ' +
  '| |' +
  '|_|',
  ' _ ' +
  '| |' +
  '|_|',
  ' _ ' +
  '| |' +
  '|_|',
  ' _ ' +
  '| |' +
  '|_|',
  ' _ ' +
  '| |' +
  '|_|',
  ' _ ' +
  '| |' +
  '|_|',
  ' _ ' +
  '| |' +
  '|_|',
]

assert.deepEqual(transformToDigits(expected[0]), transformedEntry)
