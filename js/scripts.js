// EASTERN CONFERENCE
function getEast() {
	var east = [
		'Carolina Hurricanes', 
		'Columbus Blue Jackets', 
		'New Jersey Devils', 
		'New York Islanders', 
		'New York Rangers', 
		'Philadelphia Flyers', 
		'Pittsburg Penguins', 
		'Washington Capitals',
		'Boston Bruins',
		'Buffalo Sabres',
		'Detroit Red Wings',
		'Florida Panthers',
		'Montreal Canadiens',
		'Ottawa Senators',
		'Tampa Bay Lighting',
		'Toronto Maple Leafs'
	];
	var i;

	for (i = 0; i < east.length; i++) {
		var eastWinner = east[Math.floor(Math.random() * east.length)];
		document.getElementById('eastPick').innerHTML = eastWinner
	}
};

// WESTERN CONFERENCE
function getWest() {
	var west = [
		'Chicago Blackhawks',
		'Colorado Avalanche',
		'Dallas Stars',
		'Minnesota Wild',
		'Nashville Predators',
		'St Louis Blues',
		'Winnipeg Jets',
		'Anaheim Ducks',
		'Arizona Coyotes',
		'Calgary Flames',
		'Edmondton Oilers',
		'Los Angeles Kings',
		'San Jose Sharks',
		'Vancouver Canucks',
		'Vegas Golden Knights'
	];
	var i;

	for (i = 0; i < west.length; i++) {
		var westWinner = west[Math.floor(Math.random() * west.length)];
		document.getElementById('westPick').innerHTML = westWinner
	}
};


// STANLEY CUP
function getChamp() {
	var nhl = [
		'Carolina Hurricanes', 
		'Columbus Blue Jackets', 
		'New Jersey Devils', 
		'New York Islanders', 
		'New York Rangers', 
		'Philadelphia Flyers', 
		'Pittsburg Penguins', 
		'Washington Capitals',
		'Boston Bruins',
		'Buffalo Sabres',
		'Detroit Red Wings',
		'Florida Panthers',
		'Montreal Canadiens',
		'Ottawa Senators',
		'Tampa Bay Lighting',
		'Toronto Maple Leafs',
		'Chicago Blackhawks',
		'Colorado Avalanche',
		'Dallas Stars',
		'Minnesota Wild',
		'Nashville Predators',
		'St Louis Blues',
		'Winnipeg Jets',
		'Anaheim Ducks',
		'Arizona Coyotes',
		'Calgary Flames',
		'Edmondton Oilers',
		'Los Angeles Kings',
		'San Jose Sharks',
		'Vancouver Canucks',
		'Vegas Golden Knights'
		];
	var i;

	for (i = 0; i < nhl.length; i++) {
		var cupWinner = nhl[Math.floor(Math.random() * nhl.length)];
		document.getElementById('randyPick').innerHTML = cupWinner
	}
};