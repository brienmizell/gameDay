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
fetch('https://api.sportradar.us/ncaafb-t1/2018/reg/9/schedule.json?api_key=73r466k6j37hj93act4p9nwn')
	.then((res) => res.json())
	.then((data) => (pulledData = data))
	.then(() => console.log(pulledData));
