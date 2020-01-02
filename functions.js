/* Ways to Define Function */
function basicForm() {
  return 'basic'
}

const referenced = function nameCanBeOmitted(value) {
  return value
}

const omittedName = function(value) {
  return value + ' (omitted)'
} // Function name will be `omittedName`

const arrowFunction = (value) => { return value + 1 }
const terseArrowFunction = value => value + 1


/* Fancy use of functions */
/* Example TotalPriceOperation function */
function passFunctionAsArgument(functionToBeExecuted) {
  const fakeDataFromDb = [
    { price: 30, count: 4 },
    { price: 4, count: 12 }
  ]
  return functionToBeExecuted(fakeDataFromDb) // Call passed function
}
  /* Create reusable `calculatePrice` function */
function calculatePrice(basket = []) {
  let total = 0;
  basket.forEach(item => {
    total += item.price * item.count
  });
  return total
}
  /* Execute */
console.log(passFunctionAsArgument(calculatePrice))

  /* In another function that reuse `calculatePrice` */
function calculatePriceVATIncluded(basket) {
  return calculatePrice(basket) * 1.07;
}
console.log(calculatePriceVATIncluded([
  { price: 30, count: 4 },
  { price: 4, count: 12 }
]))

// To pass function: Do not put parentheses after function name
// otherwise it will evaluate value
//
// someFunction(plusOne(4)) -------> someFunction(5)
// someFunction(plusOne) -------> someFunction([Function plusOne]) /* `plusOne` can be call inside `someFunction` */