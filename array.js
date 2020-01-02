const items = ['a', 'b', 'c', 'd', 'e'];

const map = items.map((item, index) => item + index);
console.log(map); // [ 'a0', 'b1', 'c2', 'd3', 'e4' ]

const filter = items.filter(item => item !== 'c' && item !== 'd');
console.log(filter); // [ 'a', 'b', 'e' ]

const removeFalsy = [undefined, null, 0, 1, false, '', 'D'].filter(x => x);
console.log(removeFalsy); // [1, 'D']

items.forEach((item, index) => {
  console.log(item, index);
})
null.t
const reduceA = items.reduce((accumulator, currentItem) => {
  accumulator += currentItem;
  return accumulator
}, 'concat: ');
console.log(reduceA); // concat: abcde

const reduceB = items.reduce((accumulator, currentItem, index) => {
  accumulator.push({ value: currentItem, index });
  return accumulator
}, []);
console.log(reduceB); /* [{ value: 'a', index: 0 },
                          { value: 'b', index: 1 },
                          { value: 'c', index: 2 },
                          { value: 'd', index: 3 },
                          { value: 'e', index: 4 }] */

const reduceC = items.reduce((accumulator, currentItem, index) => {
  accumulator[currentItem] = index;
  return accumulator
}, {});
console.log(reduceC); // { a: 0, b: 1, c: 2, d: 3, e: 4 }

const isNumberArray = ['12', 3, 5, 0].every(val => typeof parseInt(val) === 'number');
console.log(isNumberArray); // true

const hasNaN = ['e', false, NaN, Infinity].some(val => isNaN(val));
console.log(hasNaN); // true

// <Array>.forEach() for iterate through array, modify array: No return value
// <Array>.map() for modify each item structure: Return Array with same length
// <Array>.filter() for removing items: Return Array with same or less length
// <Array>.reduce() for reducing to output single value: Can return anything
// <Array>.every() all items must pass
// <Array>.some() at least 1 item must pass