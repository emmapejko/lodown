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

/**
 * unique: Designed to remove all duplicates from an Array using the indexOf() function in the implementation.
 * 
 * @param {Array} array: The input Array.
 * @return {Array} result: A new Array of the elements from the input array with all duplicates removed.
 */
 
 function unique(array){
     let occurances = [];
    for (let i = 0; i < array.length; i++){
        occurances.push(indexOf(array, array[i]));
    }
    
    let uniqueOccurances = [...new Set(occurances)]
    
    let result = [];
    for (let j = 0; j < uniqueOccurances.length; j++){
        result.push(array[uniqueOccurances[j]]);
    }
    
    return result;
 }
 
 module.exports.unique = unique; 

/**
 * filter: Designed to take in an array and a function, loop over the array and call the function for each element. 
 * Then, return a new array of elements from which the function call returned true.
 * 
 * @param {Array} array: The input Array.
 * @param {Function} action: The Function to call for each array element.
 * @return {Array} result: A new Array of the elements from the input array that when passed into <action> returned true.
 */
 
 function filter(array, action){
    let result = [];
    for (let i = 0; i < array.length; i++){
        if (action(array[i], i, array)){
            result.push(array[i]);
        }
    }
    return result;
 }
 
 module.exports.filter = filter;
 
 /**
 * reject: Designed to take in an array and a function, loop over the array and call the function for each element. 
 * Then, return a new array of elements from which the function call returned false.
 * 
 * @param {Array} array: The input Array.
 * @param {Function} action: The Function to call for each array element.
 * @return {Array} result: A new Array of the elements from the input array that when passed into <action> returned false.
 */
 
function reject(array, action){
    let result = [];
    for (let i = 0; i < array.length; i++){
        if (!action(array[i], i, array)){
            result.push(array[i]);
        }
    }
    return result;
}

module.exports.reject = reject;

 /**
 * partition: Designed to take in an array and a function, loop over the array and call the function for each element. 
 * Then, return a new array made up of 2 sub arrays: 
 * 1) An array of elements for which the function call returned true.
 * 2) An array of elements for which the function call returned false.
 * 
 * @param {Array} array: The input Array.
 * @param {Function} action: The Function to call for each array element.
 * @return {Array} result: A new Array made of 2 sub arrays: the first containing the elements that returned true when passed into <action>, the second containing the elements that returned false.
 */
 
function partition(array, action){
    let result = [[], []];
    for (let i = 0; i < array.length; i++){
        if (action(array[i], i, array)){
            result[0].push(array[i]);
        } else {
            result[1].push(array[i]);
        }
    }
    return result;
}

module.exports.partition = partition; 

/**
 * map: Designed to take in a collecion and a function, loop over the collection and call the function for each element/value. 
 * Then, return a new array consisting of the return values from each function call.
 * 
 * @param {Array of Object} collection: The input collection.
 * @param {Function} action: The Function to call for each element/value.
 * @return {Array} result: A new Array containing the return values from calling the function for each element/value.
 */
 
function map(collection, action){
    let result = [];
    if (Array.isArray(collection)){
        for (let i = 0; i < collection.length; i++){
            result.push(action(collection[i], i, collection));
        }
    } else {
        for (let key in collection){
            result.push(action(collection[key], key, collection));
        }
    }
    return result;
}

module.exports.map = map;

/**
 * pluck: Designed to take in an array of objects and a property, returning an array of the value of the property for every object in the input array, using the map() function.
 * 
 * @param {Array} array: The input array of objects.
 * @param {String} property: The property to find the value of in each object in the input array.
 * @return {Array}: A new Array containing the value of <property> from each object in the input array.
 */
 
 function pluck(array, property){
    return map(array, function(element){ return element[property]});
 }
 
 module.exports.pluck = pluck;
 
/**
 * every: Designed to take in a collection and a function and call the function for every element of the collection. 
 * If the function call returns true for every element, return true, if even one of them returns false, return false.
 * If no function is provided, return true if every element is truthy, return false otherwise.
 * 
 * @param {Array of Object} collection: The input collection.
 * @param {Function} action: The function to call on every element of the input collection.
 * @return {Boolean}: True if the function call returns true for every element (or if every element is truthy when no function is provided), false otherwise. 
 */
 
 function every(collection, action){
    if (action === undefined){
        if (Array.isArray(collection)){
            for (let i = 0; i < collection.length; i++){
                if (!collection[i]){
                    return false;
                }
            }
        } else {
            for (let key in collection){
                if (!collection[key]){
                    return false;
                }
            }
        }
        
    } else {
        if (Array.isArray(collection)){
            for (let i = 0; i < collection.length; i++){
                if (!action(collection[i], i, collection)){
                    return false;
                }
            }
        } else {
            for (let key in collection){
                if (!action(collection[key], key, collection)){
                    return false;
                }
            }
        }
    }
    return true;
 }
 
 module.exports.every = every;
 
/**
 * some: Designed to take in a collection and a function and call the function for every element of the collection. 
 * If the function call returns true for at least one element, return true, return false otherwise.
 * If no function is provided, return true if at least one element is truthy, return false otherwise.
 * 
 * @param {Array of Object} collection: The input collection.
 * @param {Function} action: The function to call on every element of the input collection.
 * @return {Boolean}: True if the function call returns true for at least one element (or if an element is truthy when no function is provided), false otherwise. 
 */
 
 function some(collection, action){
    if (action === undefined){
        if (Array.isArray(collection)){
            for (let i = 0; i < collection.length; i++){
                if (collection[i]){
                    return true;
                }
            }
        } else {
            for (let key in collection){
                if (collection[key]){
                    return true;
                }
            }
        }
        
    } else {
        if (Array.isArray(collection)){
            for (let i = 0; i < collection.length; i++){
                if (action(collection[i], i, collection)){
                    return true;
                }
            }
        } else {
            for (let key in collection){
                if (action(collection[key], key, collection)){
                    return true;
                }
            }
        }
    }
    return false;
 }
 
 module.exports.some = some;
 
/**
 * reduce: Designed to take in an array, a function, and a seed value. Loop over the array and call the function for every element, provididng the 'previous result' as a parameter. 
 * For the first interation, the input seed value is to be used as the previous result. If no seed value was given, use the first element of the array as the seed value. After the last iteration, return the return value of the final function call. 
 * 
 * @param {Array} array: The input collection.
 * @param {Function} action: The function to call on every element of the input array.
 * @param {Number} seed: The seed value to use in the first iteration of the loop. If not given, use array[0] as the seed value.
 * @return {Number}: The return value of the final function call after the last iteration.
 */
 
 function reduce(array, action, seed = array[0]){
    let result;
    let start;
    if (arguments.length === 3){
        result = seed;
        start = 0;
    } else {
        result = array[0];
        start = 1;
    }
    
    for (let i = start; i < array.length; i++){
        result = action(result, array[i], i);
    }
    
    return result;
 }
 
 module.exports.reduce = reduce;
 
/**
 * extend: Designed to take in any number of objects and copy all properties from all input objects into the first input object.
 * 
 * @param {Object} object1: The first input object into which all properties will be copied in to.
 * @param {Object} object2, object3, etc.: Any number of other input objects.
 * @return {Object} object1: The first input object with all properties from every other input object copied into it. 
 */
 
 function extend(object1, object2){
    for (let i = 0; i < arguments.length; i++){
        for (let key in arguments[i]){
            object1[key] = arguments[i][key];
        }
    }
    return object1;
 }
 
 module.exports.extend = extend;