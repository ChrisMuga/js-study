"use strict"

//  basic syntax for creating generators
function* displayNamesGenerator(){
    yield "Donna Sonia"
    yield "Nicole Andango"
    yield "Cynthia Achieng'"
    return "Armon Rodman"
}

const iterator = displayNamesGenerator()
console.log(iterator.next().value)
console.log(iterator.next().value)

