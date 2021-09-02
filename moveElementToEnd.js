function moveElementToEnd(array, toMove) {
  // Write your code here.
	let left = 0;
	let right = array.length - 1;
	while (right > left) {
		while (right > left && array[right] === toMove) right --;
		if (array[left] === toMove) {
			swap(left, right, array);
		}
		left ++
	}
	return array;
}
const swap = (left, right, array) => {
	let temp = array[left];
	array[left] = array[right];
	array[right] = temp;
}

// Do not edit the line below.
exports.moveElementToEnd = moveElementToEnd;
