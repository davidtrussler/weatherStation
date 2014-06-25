var app = app || {};

document.addEventListener('DOMContentLoaded', init, false); 

function init() {
	// set up intial display
	var cities = new app.Cities();
	var citiesView = new app.CitiesView(cities.citiesList);

	// set up sort function
	var form = document.forms[name="sort"]; 
	var select = form.elements[name="sort"]; 
	select.addEventListener('change', cities.sortCities, false); 
}