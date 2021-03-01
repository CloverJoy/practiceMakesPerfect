// Link https://leetcode.com/problems/number-of-valid-words-for-each-puzzle/
// Current solution approach: Naive
// Result for now:  9 / 10 test cases passed. Status: Time Limit Exceeded


/**
 * @param {string[]} words
 * @param {string[]} puzzles
 * @return {number[]}
 */
// JAVASCRIPT
var findNumOfValidWords = function(words, puzzles) {
    // create helper function for check if its true and return the number puzzle match
    // make empty array for result
        //iterate through words and check if its valid puzzle with helper function
        //store to the result array
        //return result

    const isValid = (puzzle, words) => {
        let counter = 0;
        for (let word of words) {
            let isFirstLetter = false;
            let isIncludePuzzle = true;
            for (let k = 0; k < word.length; k++) {
                if (puzzle.indexOf(word[k]) === -1) {
                    isIncludePuzzle = false;
                    continue;
                }
                if (word[k] === puzzle[0]) {
                    isFirstLetter = true;
                }
            }
            if (isFirstLetter && isIncludePuzzle) {
                counter ++
            }
        }
        return counter;
    }
    let result = [];
    for (let puzzle of puzzles) {
        result.push(isValid(puzzle, words));
    }
    return result
};

