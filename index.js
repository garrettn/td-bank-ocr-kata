const fs = require('fs')
const { decodeNumbers } = require('./src/decode-numbers')

const data = fs.readFileSync('./data/use-case-1.txt', { encoding: 'utf8' })

console.log(decodeNumbers(data))
