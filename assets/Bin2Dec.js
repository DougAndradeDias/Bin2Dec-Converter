var decimalResult = document.getElementById('decimalResult')

function convertBin2Dec() {
  var binaryInput = document.getElementById('binaryInput')
  var binaryValue = binaryInput.value

  for (const binaryBit of binaryValue) {
    if (binaryBit == '1' || binaryBit == '0') {
      let decimalValue = bin2dec(binaryValue)
      binaryInput.value = ''
      decimalResult.innerHTML = `The Binary Number <b>${binaryValue}</b> converted for Decimal Number is <b>${decimalValue}</b>`
    } else {
      binaryInput.value = ''
      decimalResult.innerHTML = `<b>${binaryValue}</b> not is a binary number, insert only 1 or 0.`
    }
  }
}

function bin2dec(numberToConvert) {
  let binaryBitString = numberToConvert
  let decimalValue = 0

  for (const binaryBit of binaryBitString) {
    let binaryBitInt = parseInt(binaryBit, 10)

    let nextDecimalValue = decimalValue * 2 + binaryBitInt

    decimalValue = nextDecimalValue
  }

  return decimalValue
}
