var app = app || {};

app.CityView = function(cityData, container) {
	container.innerHTML = ''; 

	var html = 
		'<li class="location">' + 
			'<ul>' + 
				'<li class="latitude">' + cityData.coord.lat + '</li>' + 
				'<li class="longitude">' + cityData.coord.lon + '</li>' + 
			'</ul>' + 
		'</li>' + 
		'<li class="weather">' + 
			'<img class="icon" alt="" src="http://openweathermap.org/img/w/' + cityData.weather[0].icon + '.png"/>' + 
			cityData.weather[0].description + 
		'</li>' + 
		'<li class="temperature">' + 
			'<ul>' + 
				'<li class="temperate">' + cityData.main.temp + '</li>' + 
				'<li class="max">' + cityData.main.temp_max + '</li>' + 
				'<li class="min">' + cityData.main.temp_min + '</li>' + 
			'</ul>' + 
		'</li>' + 
		'<li class="pressure">' + cityData.main.pressure + '</li>' + 
		'<li class="humidity">' + cityData.main.humidity + '</li>'; 

	container.innerHTML = html; 
}