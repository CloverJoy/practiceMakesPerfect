function binarySearch(array, target) {
  // Write your code here.
  // recursive. time o(logn) space o(logn)
	return binarySearchHelper(array, target, 0, array.length - 1);

}

const binarySearchHelper = (array, target, left, right) => {
	if (left > right) return -1;
	middle = Math.floor((left + right) / 2);
	potentialMatch = array[middle];
	if (target === potentialMatch) return middle;
	else if (target < potentialMatch) {
		return binarySearchHelper(array, target, left, middle - 1);
	} else {
		return binarySearchHelper(array, target, middle + 1, right);
	}
}
// Do not edit the line below.
exports.binarySearch = binarySearch;
