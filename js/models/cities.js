var app = app || {}

app.Cities = function() {
	var ajax = new app.Ajax(); 
	var method = 'GET';
	var citiesList = ['London', 'Luton', 'Manchester', 'Birmingham']; 
	var baseUrl = 'http://api.openweathermap.org/data/2.5/weather?q='; // + e.target.dataset.city + ',uk';  

	this.showCityData = function(e) {
		if (e.target.dataset.city !== undefined) {
			var container = e.target.parentNode.getElementsByClassName('data')[0]; 

			if (container.className.indexOf('inactive') == -1) {
				container.className = container.className.replace('active', 'inactive'); 
			} else {
				var url = baseUrl + e.target.dataset.city + ',uk';  

				ajax.getData(
					method, 
					url, 
					function(data) {
						var cityData = JSON.parse(data.content); 

						new app.CityView(cityData, container);

						if (container.className.indexOf('inactive') != -1) {
							container.className = container.className.replace('inactive', 'active'); 
						}
					}
				); 
			}
		}

		e.preventDefault(); 
	}

	this.sortCities = function(e) {
		var sortValue = e.target.value; 

		if (sortValue != 'null') {
			var citiesData = []; 

			// get data for all cities in the list
			for (var i = 0, max = citiesList.length; i < max; i++) {
				var url = baseUrl + citiesList[i] + ',uk';  

				ajax.getData(
					method, 
					url, 
					function(data) {
						var city = {}; 
						var cityData = JSON.parse(data.content); 

						city['name'] = cityData.name; 
						city['temp'] = cityData.main.temp; 

						citiesData.push(city); 

						if (citiesData.length == max) {
							if (sortValue == 'temp_asc') {
								citiesData.sort(function(a, b) {
									if (a.temp > b.temp) {
										return 1; 
									} else if (a.temp < b.temp) {
										return -1; 
									} else {
										return 0; 
									}
								}); 
							} else {
								citiesData.sort(function(a, b) {
									if (a.temp < b.temp) {
										return 1; 
									} else if (a.temp > b.temp) {
										return -1; 
									} else {
										return 0; 
									}
								}); 
							}

							new app.CitiesView(citiesData);
						}
					}
				); 
			}
		}
	}

	this.citiesList = citiesList; 
}