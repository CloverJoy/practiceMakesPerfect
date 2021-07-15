function minimumWaitingTime(queries) {
  // Write your code here.
	queries.sort((a,b) => a-b);
	let waitingTime = 0;
	for (let i = 0; i < queries.length; i++) {
		const dur = queries[i];
		const queriesLeft = queries.length - (i + 1);
		waitingTime += dur * queriesLeft;
		
	}
  return waitingTime;
}
