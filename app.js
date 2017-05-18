/**
 * Created by USER on 13/05/2017.
 */

/**
 *
 * @param calFunction
 * @returns {*}
 */
function outer(calFunction) { //pass function as parameter
    return calFunction();
}
/**
 *
 * @returns {string}
 */
function inner() {
    return "Hello World From Inner";
}

console.log(outer(inner));