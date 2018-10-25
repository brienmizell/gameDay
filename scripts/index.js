let pulledData;
fetch('https://my-little-cors-proxy.herokuapp.com/https://api.fantasydata.net/v3/cfb/stats/json/GamesByWeek/2018/9', {
	headers: {
		'Ocp-Apim-Subscription-Key': 'c72fe47dccf64d6f932fcfaa1c3bbc47'
	}
})
	.then((whatsFetched) => whatsFetched.json()) //converts to .JSON
	.then((convertedWhatsFetched) => (pulledData = convertedWhatsFetched))
	.then(() => console.log(pulledData));

// .then(() => console.log(pulledData[34]))
// .then(() => console.log(pulledData[34].AwayTeamName));

function getHomeTeamById() {
	// when user chooses a team name from drop-down returns team id
	// returns HomeTeamID
}
