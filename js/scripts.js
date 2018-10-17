// EASTERN CONFERENCE
document.getElementById("east").addEventListener("click", getEast);

function getEast() {
	var x = [
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

	var rand = x[Math.floor(Math.random() * x.length)];

	document.getElementById("east").innerHTML = rand;

}

// disable button after click
function myEast() {
    document.getElementById("east").disabled = true;
}

// WESTERN CONFERENCE
document.getElementById("west").addEventListener("click", getWest);

function getWest() {
	var y = [
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

	var rand = y[Math.floor(Math.random() * y.length)];

	document.getElementById("west").innerHTML = rand;
}

// disable button after click
function myWest() {
    document.getElementById("west").disabled = true;
}

// STANLEY CUP
document.getElementById("champ").addEventListener("click", getChamp);

function getChamp(){
	var z = [

	];

	var rand = z[Math.floor(Math.random() * z.length)];

	document.getElementById("champ").innerHTML = rand;

}

// disable button after click
function myChamp() {
    document.getElementById("champ").disabled = true;
}






