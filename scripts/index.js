// When the user clicks on the button,
// toggle between hiding and showing
// the dropdown content
const sportsAPI =
	'https://my-little-cors-proxy.herokuapp.com/https://api.fantasydata.net/v3/cfb/stats/json/GamesByWeek/2018/10';

const gameListingArea = document.querySelector('[games-this-week]');


let pulledData;

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

let pulledSportsData;

fetch(sportsAPI, {
	headers: {
		'Ocp-Apim-Subscription-Key': 'c72fe47dccf64d6f932fcfaa1c3bbc47'
	}
})
	.then((whatsFetched) => whatsFetched.json()) //converts to .JSON
	// .then((convertedWhatsFetched) => (pulledSportsData = convertedWhatsFetched))
	.then(convertGamesToElement);
// .then(() => console.log(pulledSportsData));

// .then(() => console.log(pulledSportsData[34]))
// .then(() => console.log(pulledSportsData[34].AwayTeamName));

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
		a = li[i].getElementsByTagName('a')[0];
		if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
			li[i].style.display = '';
		} else {
			li[i].style.display = 'none';
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
		let stadiumName = element.Stadium['Name'].split('&#39;').join("'");
		let gameCity = element.Stadium['City'];
		let gameState = element.Stadium['State'];
		let homeScore = element.HomeTeamScore || 0;
		let awayScore = element.AwayTeamScore || 0;
		let startTime = element.DateTime.substring(5, 10) + ' ' + element.DateTime.substring(11, 16);
		// startTime.substring(4, 10);
		// let gameLocationData = element.
		let eachGameInfo = document.createElement('div');
		eachGameInfo.classList.add('eachGame');
		section.appendChild(eachGameInfo);

		let theGameDiv = document.createElement('div');
		theGameDiv.classList.add('gameContainer');
		eachGameInfo.appendChild(theGameDiv);

		// AWAY TEAM
		let awayTeamPara = document.createElement('p');
		awayTeamPara.classList.add(awayTeamName.split(' ').join('-'));
		awayTeamPara.classList.add('theAwayTeam');
		awayTeamPara.textContent = awayTeamName + '    ' + awayScore;
		theGameDiv.appendChild(awayTeamPara);

		//HOME TEAM
		let homeTeamDiv = document.createElement('p');
		homeTeamDiv.classList.add(homeTeamName.split(' ').join('-'));
		homeTeamDiv.classList.add('theHomeTeam');
		homeTeamDiv.textContent = homeTeamName + '    ' + homeScore;
		theGameDiv.appendChild(homeTeamDiv);

		// game info
		let gameDataDiv = document.createElement('p');
		gameDataDiv.classList.add('gameDataDiv');
		gameDataDiv.textContent = startTime + ' ' + stadiumName + ' ' + gameCity + ', ' + gameState;
		theGameDiv.appendChild(gameDataDiv);

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

// geocode javascript

// geocode();

// get location form

var locationForm = document.getElementById('location-form');

// listen for submit
locationForm.addEventListener('submit', geocode);

function geocode(event) {
	// prevent actual submit
	event.preventDefault();
	var location = document.getElementById('location-input').value;
	axios
		.get('https://maps.googleapis.com/maps/api/geocode/json', {
			params: {
				address: location,
				key: 'AIzaSyB3cRW6zO8D3INc-NHDFA-0ck77gQAYpOU'
			}
		})
		// .then(whatsFetched)
		.then(function(response) {
			// log full response
			// let longlat =
			// response.data.results[0].geometry.location.lat + ',' + response.data.results[0].geometry.location.lng;

			console.log(response);
			// formatted adress

			var formattedAddress = response.data.results[0].formatted_address;
			var formattedAddressOutput = `
            <ul class="list-group">
                <li class="list-group-item">${formattedAddress}</li>
            </ul>
            `;

			// address Componets
			var addressComponets = response.data.results[0].address_components;
			var addressComponetsOutput = '<ul class="list-group">';
			for (var i = 0; i < addressComponets.length; i++) {
				addressComponetsOutput += `
                <li class="list-group_item"><strong>${addressComponets[i].types[0]}</strong>: ${addressComponets[i]
					.long_name}</li>
                `;
			}
			addressComponetsOutput += '</ul>';

			// geometry
			var lat = response.data.results[0].geometry.location.lat;
			var lng = response.data.results[0].geometry.location.lng;
			var geometryOutput = `
            <ul class="list-group">
                <li class="list-group-item"><strong>Latitude</strong>${lat}</li>
                <li class="list-group-item"><strong>Longitude</strong>${lng}</li>
            </ul>
            `;
			// response.data.results[0].geometry.location.lat + ',' + response.data.results[0].geometry.location.lng

			// output to app
			document.getElementById('formatted-address').innerHTML = formattedAddressOutput;
			document.getElementById('address-componets').innerHTML = addressComponetsOutput;
			document.getElementById('geometry').innerHTML = geometryOutput;
		})
		.catch(function(error) {
			console.log(error);
		});

	// return longlat;
}

// let weatherURL = 'https://maps.googleapis.com/maps/api/geocode/json?address='
// 		+ ${gameCity + "+" + gameState}
