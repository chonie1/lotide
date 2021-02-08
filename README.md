# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @chonie1/lotide`

**Require it:**

`const _ = require('@chonie1/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `countLetters(str)`: counts the number of occurences of each character given a string
* `countOnly(allitems, itemsToCount)`: given an allItems array, and an itemsToCount object, returns an object with the value true/false if the item in itemsToCount is present in allItems
* `eqArrays(arr1, arr2)`: returns true if two arrays are equal else false
* `eqObjects(obj1, obj2)`: returns true if two objects are equal else false
* `findKey(obj, callback)`: returns a key in the obj given a callback function with a conditional 
* `findKeyByValue(obj, val)`: returns the first key in the obj that matches the val input
* `flatten(arr)`: flattens a nested array
* `head(arr)`: returns the first element of the array
* `letterPositions(str)`: returns an array of indices for each char in the string 
* `map(arr, callback)`: changes the array given a callback function
* `middle(arr)`: returns the middle element of the array (returns an array of two numbers if the input array length is even)
* `tail(arr)`: removes the first element of the array
* `tailUntil(arr, callback)`: returns part of the array depending on the callback conditional
* `without(source, itemsToRemove)`: removes items in source given an itemsToRemove array
