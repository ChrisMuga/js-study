"use strict"
const array1 = [1, 2, 3, 4]

// you can call this a reducer || a reducer function
const add = (accumulator, currentValue) => accumulator + currentValue

// The reduce() method executes the callback once for each assigned value present in the array:
const sum = array1.reduce(add, 5)
console.log(sum)