// An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) {
        return false;
    }
    const stringed = x.toString();
    for (let i = 0 ; i < stringed.length - 1; i ++) {
        if (stringed[i] !== stringed[stringed.length - 1 - i]) {
            return false
        }
    }
    return true
    
};
