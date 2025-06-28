function checkEvenOrOdd(number) {
  if (number % 2 === 0) {
    return `${number} is even`
  } else {
    return `${number} is odd`
  }
}

console.log(checkEvenOrOdd(10))
console.log(checkEvenOrOdd(7))
