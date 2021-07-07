function tournamentWinner(competitions, results) {
  // Write your code here.
	let tournamentStanding = {};
	for (let i = 0; i < competitions.length; i++) {
		const currentHome = competitions[i][0];
		const currentAway = competitions[i][1];
		if (results[i]) {
			if (!tournamentStanding[currentHome]) {
				tournamentStanding[currentHome] = 3;
			} else {
				tournamentStanding[currentHome] += 3;
			}
		} else {
			if (!tournamentStanding[currentAway]) {
				tournamentStanding[currentAway] = 3;
			} else {
				tournamentStanding[currentAway] += 3;
			}
		} 
	}
	
	let winningTeam = '';
	let score = 0
	for (let current in tournamentStanding) {
		if (tournamentStanding[current] > score) {
			winningTeam = current;
			score = tournamentStanding[current];
		}
	}
	return winningTeam;
}
