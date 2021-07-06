

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
   
    
  const DIGIT_VALUES = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

    if (typeof s !== 'string') {
    return null;
  }

  const switchToNum = (string, obj) => {
    return obj[string];
  }
  let num = switchToNum(s[0], DIGIT_VALUES);
  for (let i = 1; i < s.length; i++) {
    let current = switchToNum(s[i], DIGIT_VALUES);
    let previous = switchToNum(s[i - 1], DIGIT_VALUES);
    if (previous >= current) {
      num += current;
    } else {
      num = num - 2 * previous + current;
    }

  }
  return num;
};
