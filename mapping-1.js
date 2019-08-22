// mapping: performing operations/functions to the constituents/values in an object.
// high order functions: take functions as arguments and returns another function or both. example = capitalizeWords() || doubledNumbers() 

const double = (n) => n * 2
const capitalize = words => words.toUpperCase()
const capitalizeWords = words => words.map(capitalize) 
const doubledNumbers = numbers => numbers.map(double)

console.log(doubledNumbers([1, 2, 3]))
console.log(capitalizeWords(["This", "Is", "Capital"]))

