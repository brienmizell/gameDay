
// When the user clicks on the button,
// toggle between hiding and showing
// the dropdown content
const sportsAPI =
	'https://my-little-cors-proxy.herokuapp.com/https://api.fantasydata.net/v3/cfb/stats/json/GamesByWeek/2018/9';

const gameListingArea = document.querySelector('[games-this-week]');

function myFunction() {
	document.getElementById('myDropdown').classList.toggle('show');
}

// Close the dropdown menu if the user
// clicks outside of it
window.onclick = function(event) {
	if (!event.target.matches('.dropbtn')) {
		var dropdowns = document.getElementsByClassName('dropdown-content');
		var i;
		for (i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
			}
		}
	}
};


let pulledData;
fetch(sportsAPI, {
	headers: {
		'Ocp-Apim-Subscription-Key': 'c72fe47dccf64d6f932fcfaa1c3bbc47'
	}
})
	.then((whatsFetched) => whatsFetched.json()) //converts to .JSON
	// .then((convertedWhatsFetched) => (pulledData = convertedWhatsFetched))
	.then(convertGamesToElement);
// .then(() => console.log(pulledData));

// .then(() => console.log(pulledData[34]))
// .then(() => console.log(pulledData[34].AwayTeamName));

function getHomeTeamById() {
	// when user chooses a team name from drop-down returns team id
	// returns HomeTeamID
}

function myFunction() {
	// declare variable
	var input, filter, ul, li, a, i;
	input = document.getElementById('myInput');
	filter = input.value.toUpperCase();
	ul = document.getElementById('myUL');
	li = ul.getElementsByTagName('li');

	// loop through all list items, 
	// and hide those whoe dont
	// match the search query
	for (i = 0; i < li.length; i++) {
		a = li[i].getElementsByTagName("a")[0];
		if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
			li[i].style.display = "";
		} else {
			li[i].style.display = "none";
		}
	}
}

const section = document.querySelector('[data-home-team]');

function convertGamesToElement(gameData) {
	console.log(section);
	gameData.forEach((element) => {
		let homeTeamName = element.HomeTeamName;
		let homeTeamScore = element.HomeTeamScore;
		let awayTeamName = element.AwayTeamName;
		let awayTeamScore = element.AwayTeamScore;
		// let gameLocationData = element.

		// AWAY TEAM
		let awayTeamDiv = document.createElement('p');
		awayTeamDiv.classList.add(awayTeamName.split(' ').join('-'));
		awayTeamDiv.textContent = awayTeamName;
		section.appendChild(awayTeamDiv);

		//HOME TEAM
		let gameDiv = document.createElement('div');
		gameDiv.classList.add('eachGame');

		let homeTeamDiv = document.createElement('p');
		homeTeamDiv.classList.add(homeTeamName.split(' ').join('-'));
		homeTeamDiv.textContent = homeTeamName;
		section.appendChild(homeTeamDiv);
		// gameDiv.appendChild(homeTeamDiv);

		console.log(homeTeamDiv.textContent);

		let gameDataDiv = document.createElement('p');
		gameDataDiv.classList.add('gameDataDiv');
		section.appendChild(gameDataDiv);

		// console.log(homeTeamName.class);
		// homeGameDiv.classList.add(homeTeamName.split(' ').join('-'));
		// document.body.appendChild(homeGameDiv);
		// console.log(homeGameDiv);
	});
	// awayGameDiv.classList.add('awayteam');
	// homeGameDiv.innerHTML = (homeTeamName, awayGameDiv);
}

// for each game there needs to be a
// - away team
// - away team score
// - home team
// - home team score
// location of game
// start time of game