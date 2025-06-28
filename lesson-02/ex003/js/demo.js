function demonstrateTypeConversion() {
  console.group('JavaScript Type Conversion Examples')

  console.log('String to Number Conversion:')
  console.log('Number("123"):', Number("123"), typeof Number("123"))
  console.log('Number("123.45"):', Number("123.45"), typeof Number("123.45"))
  console.log('Number("abc"):', Number("abc"), typeof Number("abc"))

  console.log('\nAddition vs Concatenation:')
  console.log('5 + 3 =', 5 + 3)
  console.log('"5" + "3" =', "5" + "3")
  console.log('5 + "3" =', 5 + "3")
  console.log('"5" + 3 =', "5" + 3)

  console.groupEnd()
}
