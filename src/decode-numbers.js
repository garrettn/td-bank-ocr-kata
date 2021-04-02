// Top-level function
function decodeNumbers(rawData) {
  const entries = getEntries(rawData)
  const decodedEntries = entries.map(decodeEntry)
  return decodedEntries
}

// Parse data into an array of arrays, where each
// element of the inner array is the "flattened" digit
function getEntries(data) {
  const lines = data.split('\n')
  const entries = []
  let i = 0
  while (i < lines.length) {
    if (!lines[i].length) {
      i++
      continue
    }
    entries.push(
      Array.from(
        { length: 9 },
        (j) =>
          lines[i].substr(j * 3 + 1, 3) +
          lines[i + 1].substr(j * 3 + 1, 3) +
          lines[i + 2].substr(j * 3 + 1, 3)
      )
    )
    i += 3
  }
  return entries
}

// Decode the entire entry of flattened digits
function decodeEntry(entry) {
  const decodedDigits = entry.map(decodeDigit)
  return decodedDigits.join('')
}

// Decode an individual digit
function decodeDigit(digit) {
  switch (digit) {
    // prettier-ignore
    case " _ " +
         "| |" +
         "|_|":
      return '0'
    //prettier-ignore
    case "   " +
         "  |" +
         "  |":
      return '1'
    //prettier-ignore
    case " _ " +
         " _|" +
         "|_ ":
      return '2'
    //prettier-ignore
    case " _ " +
         " _|" +
         " _|":
      return '3'
    //prettier-ignore
    case "   " +
         "|_|" +
         "  |":
      return '4'
    //prettier-ignore
    case " _ " +
         "|_ " +
         " _|":
      return '5'
    //prettier-ignore
    case " _ " +
         "|_ " +
         "|_|":
      return '6'
    //prettier-ignore
    case " _ " +
         "  |" +
         "  |":
      return '7'
    //prettier-ignore
    case " _ " +
         "|_|" +
         "|_|":
      return '8'
    //prettier-ignore
    case " _ " +
         "|_|" +
         " _|":
      return '9'
    default:
      return '?'
  }
}

module.exports = {
  decodeNumbers,
}
