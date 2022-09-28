/* *Instructions*
    Find all the substrings in a given string and return them all as an array

    Reference for substrings: https://isaaccomputerscience.org/concepts/prog_string_substring?examBoard=all&stage=all




*/


/** DO NOT CHANGE THE FUNCTION NAME **/
const substrGen = (str) => {
    /* Only make changes below this comment */
    let clean = str.replace(/\s+/g, '');
    let set = clean.length
    
    let result = [];

    console.log(set)
    for (let i = 0; i < set; i++) {
        for (let j = 1; j <= set; j++) {
            if (j <= i) {
                continue
            }
            let sliced = clean.slice(i, j);
            console.log(`i: ${i}, j:${j} = slice: ${sliced}`)
            result.push(sliced);
        }
    }

    return result;
    /* Only make changes below this comment */
}





/** DO NOT CHANGE THE LINE BELOW **/
module.exports.substrGen = substrGen;