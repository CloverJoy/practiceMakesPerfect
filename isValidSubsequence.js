function isValidSubsequence(array, sequence) {
  // Write your code here.
	let pointer = 0
	for (let i = 0; i < array.length ; i++) {
		if (pointer === sequence.length) break;
		if (sequence[pointer] === array[i]) pointer ++;
		}
		return pointer === sequence.length
	}
	
