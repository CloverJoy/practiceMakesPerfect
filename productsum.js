// Tip: You can use the Array.isArray function to check whether an item
// is a list or an integer.
function productSum(array, mul = 1) {
  // Write your code here.
	let total = 0
	for (let i = 0; i < array.length; i++) {
		if (Array.isArray(array[i])) {
			total += productSum(array[i], mul + 1);
		} else {
			total += array[i]
		}
			
	}
	return total * mul;
}

// Do not edit the line below.
exports.productSum = productSum;
