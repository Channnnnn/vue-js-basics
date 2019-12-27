// export constant variable
export const FIXED_NUMBER_VALUE = 42


// export named function
export function double(number) {
  return number * 2
}


// default export
const FIXED_STRING_VALUE = 'Hello module!'
export default FIXED_STRING_VALUE


// export anonymous function
export const triple = function(number) {
  return number * 3;
}


// export anonymous arrow function
export const plusOne = number => number + 1;
/* verbose version: const plusOne = (number) => { return number + 1; } */


// export as object
export const mathOperations = {
  double,
  triple,
  plusOne,
  answerToTheUniverse: FIXED_NUMBER_VALUE
}