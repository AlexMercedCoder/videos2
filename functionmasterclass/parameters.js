// --------------------------------------------
// Parameters and Arguments for Functions
// Parameters are the names of the variables that are passed into the function.
// Arguments are the values that are passed into the function.

function recipe(servings, days){
    console.log("You need this many eggs:", servings * 2 * days);
    console.log("You need this many cups of milk:", servings * 2 * days);
}

recipe(2,4,6)
recipe(4,5,6)