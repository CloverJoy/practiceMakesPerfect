function insertionSort(array) {
  // Write your code here.
	for (let i = 1; i < array.length; i++) {
		j = i;
		while (j > 0 && array[j] < array[j - 1]) {
			swap(j, j - 1, array);
			j -=1;
		}
	}
	return array;
}

const swap = (i, j, array) => {
	const temp = array[j];
	array[j] = array[i];
	array[i] = temp;
}

// Do not edit the line below.
exports.insertionSort = insertionSort;
