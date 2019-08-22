"use strict"

function compute(a){
    return function (b){
        return function (c){
            return a+b+c
        }
    }
}

const compute_ = a => b => c => a + b + c

console.log(compute(4)(5)(6))
console.log(compute_(4)(5)(6))