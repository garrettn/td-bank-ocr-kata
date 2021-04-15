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
    // FIXME: This will also skip over the first lines if the digits are all
    // two lines tall, i.e. 1 and 4
    // if (i > 0 && (i + 1) % 4 === 0) {
    //   i++
    //   continue
    // }
    const entry = [lines[i], lines[i + 1], lines[i + 2]]
    if (entry.every((e) => e)) entries.push(entry)
    // entries.push(
    //   Array.from(
    //     { length: 9 },
    //     (j) =>
    //       // FIXME: Something is wrong here too. It's taking the wrong substrings.
    //       lines[i].substr(j * 3 + 1, 3) +
    //       lines[i + 1].substr(j * 3 + 1, 3) +
    //       lines[i + 2].substr(j * 3 + 1, 3)
    //   )
    // )
    i += 4
  }
  return entries
}

function transformToDigits(lines) {
  const digits = ['', '', '', '', '', '', '', '', '']
  lines.forEach((line, i) => {
    digits[0] = digits[0] + line.substr(0, 3)
    digits[1] = digits[1] + line.substr(3, 3)
    digits[2] = digits[2] + line.substr(6, 3)
    digits[3] = digits[3] + line.substr(9, 3)
    digits[4] = digits[4] + line.substr(12, 3)
    digits[5] = digits[5] + line.substr(15, 3)
    digits[6] = digits[6] + line.substr(18, 3)
    digits[7] = digits[7] + line.substr(21, 3)
    digits[8] = digits[8] + line.substr(24, 3)
  })
  return digits
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
  getEntries,
  transformToDigits,
}
