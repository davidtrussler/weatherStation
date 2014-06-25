var app = app || {}; 

app.Ajax = function() {
	this.getData = function(method, url, callback) {
		var data = {}; 
		var request; 

		if (window.XMLHttpRequest) {
			request = new XMLHttpRequest; 
		} else {
			request = new ActiveXObject('Msxml2.XMLHTTP'); 
		}

		request.open(method, url, true); 
		request.send(url); 

		request.onreadystatechange = function() {

			switch(this.readyState) {
				case 1: 
					data['content'] = null; 
					break; 
				case 2: 
					data['content'] = null; 
					break; 
				case 3: 
					data['content'] = null; 
					break; 
				case 4: 
					data['content'] = getResponse(this); 
					data['status'] = this.status; 

					callback(data); 

					break; 
			}
		}; 
	}; 

	getResponse = function(request) {
		if (request.responseXML) {
			return request.responseXML.documentElement; 
		} else {
			return request.responseText; 
		}
	};
};