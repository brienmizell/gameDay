// When the user clicks on the button,
// toggle between hiding and showing
// the dropdown content
function myFunction() {
	document.getElementById('myDropdown').classList.toggle('show');
}

// Close the dropdown menu if the user
// clicks outside of it
window.onclick = function(event) {
	if (!event.target.matches('.dropbtn')) {
		var dropdowns = document.getElementsByClassName('dropdown-content');
		var i;
		for (i = 0; i < dropdowns.length; io++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
			}
		}
	}
};

let pulledData;
fetch('https://my-little-cors-proxy.herokuapp.com/https://api.fantasydata.net/v3/cfb/stats/JSON/Teams', {
	headers: {
		'Ocp-Apim-Subscription-Key': 'c72fe47dccf64d6f932fcfaa1c3bbc47'
	}
})
	.then((res) => res.json())
	.then((data) => (pulledData = data))
	.then(() => console.log(pulledData));
