function bubbleSort(array) {
  // Write your code here.
	let isSorted = false;
	while (!isSorted) {
		isSorted = true;
		for (let i = 0; i < array.length - 1; i++) {
			if (array[i] > array[i+1]) {
				isSorted = false;
				let temp = array[i];
				array[i] = array[i+1];
				array[i+1] = temp;
			}
		}
	}
	return array;
}
