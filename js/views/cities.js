var app = app || {};

app.CitiesView = function(citiesArray) {
	// set up cities model
	var cities = new app.Cities();

	// create cities list
	var locations = document.getElementById('locations');  
	var html = ''; 

	for (var i = 0, max = citiesArray.length; i < max; i++) {
		var cityName = ''; 

		if (typeof citiesArray[i] == 'object') {
			cityName = citiesArray[i].name; 
		} else {
			cityName = citiesArray[i]; 
		}

		html += 
			'<li class="name">' + 
				'<a href="#" data-city="' + cityName + '">' + 
					cityName + 
				'</a>' + 
				'<ul class="data inactive"></ul>' 
			'</li>';  
	}

	locations.innerHTML = html; 

	// set up cities events
	locations.addEventListener(
		'click', 
		cities.showCityData, 
		false
	); 
};