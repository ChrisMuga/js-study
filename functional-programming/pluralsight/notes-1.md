# Functional Programming

## Omit needless names
    For example when using dates or values mostly generated by in-built functions
## Separating mutation from calculation
    Do not mutate un-necessarily, your functions should mostly send/return 'signals'
    this reduces side-effects.
## Recognize pure functions
    Pure functions do not change anything outside of their scopes
    And returns the same results to the same inputs, ALWAYS.
    Ergo, they are deterministic.
    Pure functions are `parallelizeable` i.e. since they do not have side-effects, they can run independently without affecting other aspects of the system.
## Separate functions from rules
    Functions should be nouns.
    A single unit that encompasses sets,
    f(x,y) = f(2,3)
    Use magic if and whenever you can
    
    ---
    CURRYING
    ---

    
    Currying is a technique of evaluating function with multiple arguments, into sequence of function with single argument.

    In other words, when a function, instead of taking all arguments at one time, takes the first one and return a new function that takes the second one and returns a new function which takes the third one, and so forth, until all arguments have been fulfilled.
    ----
    Example of Curring
    ----

    add(1, 2, 3) => BECOMES => add(1)(2)(3)

    