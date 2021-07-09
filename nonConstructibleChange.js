function nonConstructibleChange(coins) {
  // Write your code here.
	coins.sort((a,b) => a - b );
	let currentCoin = 0;
	for (let coin of coins) {
		if (coin > currentCoin + 1) return currentCoin + 1;
		currentCoin += coin;
	} 
	
  return currentCoin + 1;
}
