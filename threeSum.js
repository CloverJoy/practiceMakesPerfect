function threeNumberSum(array, targetSum) {
  // Write your code here.
	array.sort((a,b) => a-b);
	let triplets = [];
	for (let i = 0; i < array.length - 2 ; i++) {
		let left = i + 1;
		let right = array.length - 1;
		while(left < right) {
			const current = array[i] + array[left] +  array[right];
			if (current === targetSum) {
				triplets.push([array[i], array[left], array[right]])
				left ++;
				right --;
			} else if (current < targetSum) {
				left++
			} else if (current > targetSum) {
				right--
			}
		}
	}
	return triplets
}
