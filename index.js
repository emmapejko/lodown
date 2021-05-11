'use strict';

/**
 * identity: Designed to take in any value and return that value unchanged.
 * 
 * @param {any data type} value: The input value.
 * @return {any data type} value: The input value unchanged. 
 */
 
function identity(value){
    return value;
}

module.exports.identity = identity;


/**
 * typeOf: Designed to take in any value and return the type of the value as a string.
 * 
 * @param {any data type} value: The input value.
 * @return {String}: The type of the input value. 
 */

function typeOf(value){
    if (Array.isArray(value)){
        return 'array';
    } else if (typeof value === 'string'){
        return 'string';
    } else if (typeof value === 'number'){
        return 'number';
    } else if (typeof value === 'boolean'){
        return 'boolean';
    } else if (value instanceof Date){
        return 'date';
    } else if (value === null){
        return 'null';
    } else if (value === undefined){
        return 'undefined';
    } else if (value instanceof Function){
        return 'function';
    } else if (typeof value === 'object'){
        return 'object';
    } 
}

module.exports.typeOf = typeOf;

/**
 * first: Designed to take in an array and a number and return the first <number> items of the array.
 * If the array is not an array, and emtpy literal array is returned. 
 * If the number is not given or is not a number, just the first element of the array is returned. 
 * 
 * @param {Array} array: The input array.
 * @param {Number} num: The input number dictating how many elements of the array to return.
 * @return {Array}: result: The output array of values.  
 */

function first(array, num){
    let result = [];
    if (!Array.isArray(array)){
        return [];
    } else if (typeof num !== 'number'){
        return array[0];
    } else if (num < 0){
        return [];
    } else if (num > array.length){
        return array;
    } else {
        for (let i = 0; i < num; i++){
            result.push(array[i]);
        }
    }
    return result;
}

module.exports.first = first;

/**
 * last: Designed to take in an array and a number and return the last <number> items of the array.
 * If the array is not an array, and emtpy literal array is returned. 
 * If the number is not given or is not a number, just the first element of the array is returned. 
 * 
 * @param {Array} array: The input array.
 * @param {Number} num: The input number dictating how many elements of the array to return.
 * @return {Array}: result: The output array of values.  
 */

function last(array, num){
    let result = [];
    if (!Array.isArray(array)){
        return [];
    } else if (typeof num !== 'number'){
        return array[array.length-1];
    } else if (num < 0){
        return [];
    } else if (num > array.length){
        return array;
    } else {
            for (let i = (array.length - num); i < array.length; i++){
                result.push(array[i]);
       }
    }
    return result;
}

module.exports.last = last;

/**
 * indexOf: Designed to take in an array and a value and return the index of the first occurance of that value in the array.
 * If the value is not in the array, return -1.
 * This is accomplished by iterating through the array and comparing each element with the input value.
 * 
 * @param {Array} array: The input array.
 * @param {any data type} value: The value to check for occurances for in the array.
 * @return {Number}: i: The index of the first occurance of the value in the array. 
 */

function indexOf(array, value){
    for (let i = 0; i < array.length; i++){
        if (array[i] === value){
            return i;
        }
    }
    return -1;
}

module.exports.indexOf = indexOf;

/**
 * contains: Designed to take in an array and a value and return true if the value is in the array, return false otherwise.
 * The ternary operator must be used in the implementation.
 * 
 * @param {Array} array: The input array.
 * @param {any data type} value: The value to check if the array contains.
 * @return {Boolean}: i: true if the value is in the array, false otherwise. 
 */

function contains(array, value){
    let result = false;
    for (let i = 0; i < array.length; i++){
        if (array[i] === value){
            result = true;
        }
    }
    return result ? true : false;
}

module.exports.contains = contains;


/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(let i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (let key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;

