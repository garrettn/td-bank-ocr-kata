// Top-level function
function decodeNumbers(rawData) {
  const entries = getEntries(rawData)
  const decodedEntries = entries.map(decodeEntry)
  return decodedEntries
}

// Parse data into an array of arrays, where each
// element of the inner array is the "flattened" digit
function getEntries(data) {
  return []
}

// Decode the entire entry of flattened digits
function decodeEntry(entry) {
  const decodedDigits = entry.map(decodeDigit)
  return decodedDigits.join('')
}

// Decode an individual digit
function decodeDigit(digit) {}

module.exports = {
  decodeNumbers,
}
