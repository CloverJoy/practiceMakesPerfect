const isPermutation = (str1, str2) => {
  //"abc" "bca"
  if (str1.length !== str2.length) {
    return false;
  }
  if (str1.split("").sort().join("") === str2.split("").sort().join("")) {
    return true;
  }
  return false;
}

console.log(isPermutation("abc", "bca"))
