/**
 * Export and Import are the core of JS modules
 * 1 file = 1 module
 * There are 2 types of exporting value
 *    `Named export` (many per module)
 *    `Default export` (one per module)
 */
import { double } from './export.js';
console.log('> double(3):', double(3)); // 6


/**
 * Import can be renamed with `as` keyword
 */
import { FIXED_NUMBER_VALUE as importedNumber } from './export.js';
console.log('> importedNumber:',importedNumber); // 42


/**
 * Default import always be renamed when define
 */
import stringValueFromDefaultExport from './export.js';
console.log('> Default import:', stringValueFromDefaultExport); // Hello module!


/**
 * Multiple named import
 */
import {
  double as doubleFn,
  FIXED_NUMBER_VALUE as fixedNumber
} from './export.js';
console.log('> Multiple named import:', doubleFn.toString(), fixedNumber); // [Function] 42


/**
 * Import object
 */
import { mathOperations } from './export.js';
console.log('> mathOperation object:', mathOperations);


/**
 * Import all as an object
 */
import * as importExamples from "./export.js";
console.log('> Import all as an object:', importExamples);
/**
 * { 
 *    FIXED_NUMBER_VALUE:42,
 *    default: 'Hello module!',
 *    double: [Function] 
 *    triple: [Function] 
 *    plusOne: [Function] 
 *    mathOperations: {
 *      double: [Function] 
 *      triple: [Function] 
 *      plusOne: [Function] 
 *      answerToTheUniverse: 42
 *    }
 * }
 */
