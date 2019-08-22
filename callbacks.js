// callbacks are functions passed to other functions as parameters
const shout = (name) => name.toUpperCase()+"!"
const takeAndShout = (name, shout) => shout(name)
console.log(takeAndShout("Donna Sonia", shout))