const isUnique = (str) => {
  //"aSdejDu"
  let theString = str.toLowerCase().split('').sort();
  for (let i = 0; i < theString.length ; i++) {
    if (theString[i] === theString[i - 1]) {
      return false;
    }
  }
  return true;
}

console.log(isUnique('abcdefg'));
console.log(isUnique('abacdafg'));
