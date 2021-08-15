function smallestDifference(arrayOne, arrayTwo) {
  // Write your code here.
	arrayOne.sort((a,b) => a-b);
	arrayTwo.sort((a,b) => a-b);
	let iOne = 0;
	let iTwo = 0;
	let smallest = Infinity;
	let current = Infinity;
	let smallestPair = [];
	while (iOne < arrayOne.length && iTwo < arrayTwo.length) {
		let firstNum = arrayOne[iOne];
		let secondNum = arrayTwo[iTwo];
		if (firstNum < secondNum) {
			current = secondNum - firstNum;
			iOne++
		} else if (secondNum < firstNum) {
			current = firstNum - secondNum;
			iTwo++
		} else {
			return [firstNum, secondNum]
		}
		if (smallest > current) {
		smallest = current;
		smallestPair = [firstNum, secondNum];
	}
	}
	return smallestPair;
}
